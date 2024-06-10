// (C) 2024 GoodData Corporation

/**
 * Semantic search results object.
 * @alpha
 */
export interface IWorkspaceGenAISearchResultObject {
    id: string;
    title: string;
    description: string;
    type: WorkspaceGenAISearchObjectType;
}

/**
 * @alpha
 */
export type WorkspaceGenAISearchObjectType =
    | "attribute"
    | "metric"
    | "fact"
    | "label"
    | "date"
    | "dataset"
    | "visualization"
    | "dashboard";
