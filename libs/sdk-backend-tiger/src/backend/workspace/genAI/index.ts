// (C) 2024 GoodData Corporation

import { IWorkspaceGenAIService } from "@gooddata/sdk-backend-spi";
import { TigerAuthenticatedCallGuard } from "../../../types/index.js";
import { IWorkspaceGenAISearchResultObject, WorkspaceGenAISearchObjectType } from "@gooddata/sdk-model";

export class TigerWorkspaceGenAIService implements IWorkspaceGenAIService {
    constructor(private readonly authCall: TigerAuthenticatedCallGuard, public readonly workspace: string) {}

    async syncMetadata(): Promise<void> {
        await this.authCall((client) => client.actions.metadataSync({ workspaceId: this.workspace }));
    }

    async search(
        query: string,
        deepSearch: boolean,
        objectTypes: WorkspaceGenAISearchObjectType[],
    ): Promise<IWorkspaceGenAISearchResultObject[]> {
        const result = await this.authCall((client) =>
            client.execution.aiSearch({
                workspaceId: this.workspace,
                searchRequest: {
                    question: query,
                    deepSearch,
                    objectTypes,
                },
            }),
        );

        return result.data.results as IWorkspaceGenAISearchResultObject[];
    }
}
