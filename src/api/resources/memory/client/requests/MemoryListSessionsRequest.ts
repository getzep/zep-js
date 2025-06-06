/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface MemoryListSessionsRequest {
    /**
     * Page number for pagination, starting from 1
     */
    pageNumber?: number;
    /**
     * Number of sessions to retrieve per page.
     */
    pageSize?: number;
    /**
     * Field to order the results by: created_at, updated_at, user_id, session_id.
     */
    orderBy?: string;
    /**
     * Order direction: true for ascending, false for descending.
     */
    asc?: boolean;
}
