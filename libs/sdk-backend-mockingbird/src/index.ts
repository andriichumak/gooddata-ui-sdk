// (C) 2019-2022 GoodData Corporation
/**
 * This package provides a mock Analytical Backend implementation used mainly for testing.
 *
 * @remarks
 * For the GoodData platform version, see `@gooddata/sdk-backend-bear`.
 * For the GoodData Cloud and GoodData.CN version, see `@gooddata/sdk-backend-tiger`.
 *
 * @packageDocumentation
 */
import { dummyBackend, dummyBackendEmptyData, dummyDataView } from "@gooddata/sdk-backend-base";
export { dummyBackend, dummyBackendEmptyData, dummyDataView };

export { recordedBackend, defaultRecordedBackendCapabilities } from "./recordedBackend";

export {
    RecordingIndex,
    ExecutionRecording,
    InsightRecording,
    DisplayFormRecording,
    ScenarioRecording,
    RecordedBackendConfig,
    CatalogRecording,
    VisClassesRecording,
    DashboardRecording,
    RecordedRefType,
    SecuritySettingsUrlValidator,
    SecuritySettingsOrganizationScope,
    SecuritySettingsPluginUrlValidator,
    IUserGroup,
    IUsers,
    IAccessControl,
    IUserManagement,
    AttributeElementsFiltering,
    AttributeElementsFilteringPredicate,
} from "./recordedBackend/types";

export {
    recordedDataView,
    recordedDataViews,
    recordedInsight,
    recordedInsights,
    DataViewAll,
    dataViewWindow,
    DataViewFirstPage,
    NamedDataView,
} from "./recordedBackend/execution";

export {
    newAttributeFilterLimitingItem,
    newDateFilterLimitingItem,
    newMeasureLimitingItem,
} from "./recordedBackend/elementsUtils";

export { CompositeBackendPart, compositeBackend } from "./compositeBackend/index";

export {
    LegacyExecutionRecording,
    legacyRecordedBackend,
    legacyRecordedDataView,
    LegacyRecordingIndex,
    LegacyWorkspaceRecordings,
} from "./legacyRecordedBackend";

export { objRefsToStringKey } from "./recordedBackend/utils";
