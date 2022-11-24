// (C) 2021-2022 GoodData Corporation
import { ObjRef } from "@gooddata/sdk-model";

import { ILayoutCoordinates, IMenuButtonItemsVisibility, IToastMessage } from "../../../types";
import { DraggableLayoutItem } from "../../../presentation/dragAndDrop/types";
import { IDashboardWidgetOverlay } from "../../types/commonTypes";

/**
 * @alpha
 */
export interface UiState {
    scheduleEmailManagementDialog: {
        open: boolean;
    };
    scheduleEmailDialog: {
        open: boolean;
        defaultAttachmentRef: ObjRef | undefined;
    };
    saveAsDialog: {
        open: boolean;
    };
    shareDialog: {
        open: boolean;
    };
    deleteDialog: {
        open: boolean;
    };
    kpiDeleteDialog: {
        /**
         * Undefined means the dialog should be closed
         */
        widgetCoordinates: ILayoutCoordinates | undefined;
    };
    cancelEditModeDialog: {
        open: boolean;
    };
    filterBar: {
        expanded: boolean;
    };
    kpiAlerts: {
        openedWidgetRef: ObjRef | undefined;
        highlightedWidgetRef: ObjRef | undefined;
    };
    menuButton: {
        itemsVisibility: IMenuButtonItemsVisibility;
    };
    selectedWidgetRef: ObjRef | undefined;
    configurationPanelOpened: boolean;
    kpiDateDatasetAutoSelect: boolean;
    insightListLastUpdateRequested: number;
    widgetsLoadingAdditionalData: ObjRef[];
    filterAttributeSelectionOpen: boolean;
    selectedFilterIndex: number | undefined;
    activeSectionIndex: number | undefined;
    toastMessages: IToastMessage[];
    draggingWidgetSource: DraggableLayoutItem | undefined;
    draggingWidgetTarget: ILayoutCoordinates | undefined;
    widgetsOverlay: Record<string, IDashboardWidgetOverlay>;
}

export const uiInitialState: UiState = {
    scheduleEmailManagementDialog: {
        open: false,
    },
    scheduleEmailDialog: {
        open: false,
        defaultAttachmentRef: undefined,
    },
    saveAsDialog: {
        open: false,
    },
    shareDialog: {
        open: false,
    },
    deleteDialog: {
        open: false,
    },
    kpiDeleteDialog: {
        widgetCoordinates: undefined,
    },
    cancelEditModeDialog: {
        open: false,
    },
    filterBar: {
        expanded: false,
    },
    kpiAlerts: {
        highlightedWidgetRef: undefined,
        openedWidgetRef: undefined,
    },
    menuButton: {
        itemsVisibility: {},
    },
    selectedWidgetRef: undefined,
    configurationPanelOpened: true,
    kpiDateDatasetAutoSelect: false,
    insightListLastUpdateRequested: 0,
    widgetsLoadingAdditionalData: [],
    filterAttributeSelectionOpen: false,
    selectedFilterIndex: undefined,
    activeSectionIndex: undefined,
    toastMessages: [],
    draggingWidgetSource: undefined,
    draggingWidgetTarget: undefined,
    widgetsOverlay: {},
};
