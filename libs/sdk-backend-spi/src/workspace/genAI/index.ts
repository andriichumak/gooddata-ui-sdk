// (C) 2024 GoodData Corporation

import { IWorkspaceGenAISearchResultObject, WorkspaceGenAISearchObjectType } from "@gooddata/sdk-model";

/**
 * Service for working with AI services in the workspace.
 * @alpha
 */
export interface IWorkspaceGenAIService {
    /**
     * Make a request to sync the metadata for the given workspace with AI services.
     * @alpha
     */
    syncMetadata(): Promise<void>;

    /**
     * Make a request to run semantic search for metadata objects in the workspace.
     * @param query - search query
     * @param deepSearch - whether to include dependencies in the search
     * @param objectTypes - types of objects to search for
     * @alpha
     */
    search(
        query: string,
        deepSearch: boolean,
        objectTypes: WorkspaceGenAISearchObjectType[],
    ): Promise<IWorkspaceGenAISearchResultObject[]>;
}
