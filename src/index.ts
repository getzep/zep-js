import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface Memory {
  messages: Message[];
  metadata: Record<string, any>;
  summary: Summary;
}

interface Message {
  content: string;
  created_at: string;
  metadata: Record<string, any>;
  role: string;
  token_count: number;
  uuid: string;
}

interface SearchPayload {
  meta?: Record<string, any>;
  text: string;
}

interface SearchResult {
  dist: number;
  message: Message;
  meta?: Record<string, any>;
  summary: Summary;
}

interface Summary {
  content: string;
  created_at: string;
  metadata: Record<string, any>;
  recent_message_uuid: string;
  token_count: number;
  uuid: string;
}

interface APIError {
  code: number;
  message: string;
}

class ZepLongTermMemoryAPI {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getMemory(sessionId: string, lastn?: number): Promise<Memory[] | APIError> {
    try {
      const response: AxiosResponse = await this.client.get(`/api/v1/sessions/${sessionId}/memory`, {
        params: { lastn },
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async addMemory(sessionId: string, memoryMessages: Memory): Promise<string | APIError> {
    try {
      const response: AxiosResponse = await this.client.post(`/api/v1/sessions/${sessionId}/memory`, memoryMessages);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async deleteMemory(sessionId: string): Promise<string | APIError> {
    try {
      const response: AxiosResponse = await this.client.delete(`/api/v1/sessions/${sessionId}/memory`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async searchMemory(sessionId: string, searchPayload: SearchPayload, limit?: number): Promise<SearchResult[] | APIError> {
    try {
      const response: AxiosResponse = await this.client.post(`/api/v1/sessions/${sessionId}/search`, searchPayload, {
        params: { limit },
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export default ZepLongTermMemoryAPI;
