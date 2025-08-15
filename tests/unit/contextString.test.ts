import { composeContextString, formatEdgeDateRange } from "../../src/contextString.js";
import { EntityEdge, EntityNode, Episode, RoleType } from "../../src/api/index.js";

describe("contextString", () => {
    const mockEdge: EntityEdge = {
        fact: "John works at Acme Corp",
        validAt: "2024-01-01T10:00:00Z",
        invalidAt: "2024-12-31T23:59:59Z",
        createdAt: "2024-01-01T10:00:00Z",
        name: "works_at",
        sourceNodeUuid: "source-uuid",
        targetNodeUuid: "target-uuid",
        uuid: "edge-uuid-1"
    };

    const mockNode: EntityNode = {
        name: "John Doe",
        summary: "Software engineer at Acme Corp",
        createdAt: "2024-01-01T10:00:00Z",
        labels: ["Person", "Employee"],
        attributes: {
            age: "30",
            department: "Engineering",
            labels: ["Person", "Employee"] // This should be filtered out
        },
        uuid: "node-uuid-1"
    };

    const mockEpisode: Episode = {
        content: "Hello, how are you?",
        createdAt: "2024-01-15T14:30:00Z",
        role: "user",
        roleType: RoleType.UserRole,
        uuid: "episode-uuid-1"
    };

    describe("formatEdgeDateRange", () => {
        it("should format date range correctly", () => {
            const result = formatEdgeDateRange(mockEdge);
            expect(result).toMatch(/2024-01-01 \d{2}:\d{2}:\d{2} - 2024-12-31 \d{2}:\d{2}:\d{2}/);
        });

        it("should handle missing validAt", () => {
            const edge = { ...mockEdge, validAt: undefined };
            const result = formatEdgeDateRange(edge);
            expect(result).toMatch(/date unknown - 2024-12-31 \d{2}:\d{2}:\d{2}/);
        });

        it("should handle missing invalidAt", () => {
            const edge = { ...mockEdge, invalidAt: undefined };
            const result = formatEdgeDateRange(edge);
            expect(result).toMatch(/2024-01-01 \d{2}:\d{2}:\d{2} - present/);
        });
    });

    describe("composeContextString", () => {
        it("should compose context string with only facts and entities", () => {
            const result = composeContextString([mockEdge], [mockNode]);
            
            expect(result).toContain("FACTS and ENTITIES represent relevant context");
            expect(result).toMatch(/John works at Acme Corp \(Date range: 2024-01-01 \d{2}:\d{2}:\d{2} - 2024-12-31 \d{2}:\d{2}:\d{2}\)/);
            expect(result).toContain("Name: John Doe");
            expect(result).toContain("Label: Person");
            expect(result).toContain("Attributes:");
            expect(result).toContain("  age: 30");
            expect(result).toContain("  department: Engineering");
            expect(result).toContain("Summary: Software engineer at Acme Corp");
            expect(result).not.toContain("EPISODES");
        });

        it("should compose context string with facts, entities, and episodes", () => {
            const result = composeContextString([mockEdge], [mockNode], [mockEpisode]);
            
            expect(result).toContain("FACTS and ENTITIES, and EPISODES represent relevant context");
            expect(result).toMatch(/John works at Acme Corp \(Date range: 2024-01-01 \d{2}:\d{2}:\d{2} - 2024-12-31 \d{2}:\d{2}:\d{2}\)/);
            expect(result).toContain("Name: John Doe");
            expect(result).toMatch(/user \(user\): Hello, how are you\? \(2024-01-15 \d{2}:\d{2}:\d{2}\)/);
            expect(result).toContain("<EPISODES>");
            expect(result).toContain("</EPISODES>");
        });

        it("should handle entity without labels", () => {
            const nodeWithoutLabels = { ...mockNode, labels: undefined };
            const result = composeContextString([], [nodeWithoutLabels]);
            
            expect(result).toContain("Name: John Doe");
            expect(result).not.toMatch(/^Label:/m);
            expect(result).toContain("Summary: Software engineer at Acme Corp");
        });

        it("should handle entity with only 'Entity' label", () => {
            const nodeWithEntityLabel = { ...mockNode, labels: ["Entity"] };
            const result = composeContextString([], [nodeWithEntityLabel]);
            
            expect(result).toContain("Name: John Doe");
            expect(result).not.toMatch(/^Label:/m);
        });

        it("should handle entity without attributes", () => {
            const nodeWithoutAttributes = { ...mockNode, attributes: undefined };
            const result = composeContextString([], [nodeWithoutAttributes]);
            
            expect(result).toContain("Name: John Doe");
            expect(result).not.toMatch(/^Attributes:/m);
        });

        it("should handle entity without summary", () => {
            const nodeWithoutSummary = { ...mockNode, summary: "" };
            const result = composeContextString([], [nodeWithoutSummary]);
            
            expect(result).toContain("Name: John Doe");
            expect(result).not.toMatch(/^Summary:/m);
        });

        it("should handle episode with only role", () => {
            const episodeWithOnlyRole = { ...mockEpisode, roleType: undefined };
            const result = composeContextString([], [], [episodeWithOnlyRole]);
            
            expect(result).toMatch(/user: Hello, how are you\? \(2024-01-15 \d{2}:\d{2}:\d{2}\)/);
        });

        it("should handle episode with only roleType", () => {
            const episodeWithOnlyRoleType = { ...mockEpisode, role: undefined };
            const result = composeContextString([], [], [episodeWithOnlyRoleType]);
            
            expect(result).toMatch(/\(user\): Hello, how are you\? \(2024-01-15 \d{2}:\d{2}:\d{2}\)/);
        });

        it("should handle episode without role and roleType", () => {
            const episodeWithoutRole = { ...mockEpisode, role: undefined, roleType: undefined };
            const result = composeContextString([], [], [episodeWithoutRole]);
            
            expect(result).toMatch(/Hello, how are you\? \(2024-01-15 \d{2}:\d{2}:\d{2}\)/);
        });

        it("should handle empty inputs", () => {
            const result = composeContextString([], [], []);
            
            expect(result).toContain("FACTS and ENTITIES represent relevant context");
            expect(result).toContain("<FACTS>");
            expect(result).toContain("</FACTS>");
            expect(result).toContain("<ENTITIES>");
            expect(result).toContain("</ENTITIES>");
            expect(result).not.toContain("EPISODES");
        });

        it("should filter out 'labels' attribute correctly", () => {
            const result = composeContextString([], [mockNode]);
            
            expect(result).toContain("Attributes:");
            expect(result).toContain("  age: 30");
            expect(result).toContain("  department: Engineering");
            expect(result).not.toContain("  labels:");
        });

        it("should handle multiple entities and episodes", () => {
            const secondNode: EntityNode = {
                name: "Jane Smith",
                summary: "Product manager",
                createdAt: "2024-01-01T10:00:00Z",
                uuid: "node-uuid-2"
            };
            
            const secondEpisode: Episode = {
                content: "I'm doing well, thanks!",
                createdAt: "2024-01-15T14:31:00Z",
                role: "assistant",
                roleType: RoleType.AssistantRole,
                uuid: "episode-uuid-2"
            };

            const result = composeContextString([mockEdge], [mockNode, secondNode], [mockEpisode, secondEpisode]);
            
            expect(result).toContain("Name: John Doe");
            expect(result).toContain("Name: Jane Smith");
            expect(result).toMatch(/user \(user\): Hello, how are you\?/);
            expect(result).toMatch(/assistant \(assistant\): I'm doing well, thanks!/);
        });
    });
});