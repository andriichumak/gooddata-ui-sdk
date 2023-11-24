// (C) 2023 GoodData Corporation
import React from "react";
import isEmpty from "lodash/isEmpty.js";
import { ICatalogAttributeHierarchy, objRefToString } from "@gooddata/sdk-model";
import { AttributeHierarchyDialog } from "@gooddata/sdk-ui-ext";

import { IDrillDownAttributeHierarchyConfig } from "../../../../drill/types.js";
import { selectCatalogAttributeHierarchies, useDashboardSelector } from "../../../../../model/index.js";
import EmptyAttributeHierarchyInfo from "./EmptyAttributeHierarchyInfo.js";
import { useAttributeHierarchy } from "./useAttributeHierarchy.js";
import AttributeHierarchyDropdown from "./AttributeHierarchyDropdown.js";

interface IDrillTargetDashboardItemProps {
    config: IDrillDownAttributeHierarchyConfig;
    onSelect: (targetItem: ICatalogAttributeHierarchy) => void;
    onDeleteInteraction: () => void;
}

const DrillTargetAttributeHierarchyItem: React.FC<IDrillTargetDashboardItemProps> = ({
    config,
    onSelect,
    onDeleteInteraction,
}) => {
    const catalogAttributeHierarchies = useDashboardSelector(selectCatalogAttributeHierarchies);

    const {
        editingAttributeHierarchyRef,
        shouldDisplayAttributeHierarchyDialog,
        onDeleteAttributeHierarchy,
        onSaveAttributeHierarchy,
        onOpenAttributeHierarchyDialog,
        onCloseAttributeHierarchyDialog,
    } = useAttributeHierarchy({ onDeleteInteraction });

    const attributeDescriptor = config.attributes.find(
        (attr) => attr.attributeHeader.localIdentifier === config.originLocalIdentifier,
    );

    const existInHierarchies = catalogAttributeHierarchies.filter((hierarchy) => {
        return hierarchy.attributeHierarchy.attributes.some(
            (ref) => objRefToString(ref) === attributeDescriptor?.attributeHeader.identifier,
        );
    });

    const shouldShowEmptyMessage = isEmpty(existInHierarchies) && !config.complete;

    return (
        <>
            {shouldShowEmptyMessage ? (
                <EmptyAttributeHierarchyInfo
                    onOpenAttributeHierarchyDialog={onOpenAttributeHierarchyDialog}
                />
            ) : (
                <AttributeHierarchyDropdown
                    config={config}
                    onSelect={onSelect}
                    attributeDescriptor={attributeDescriptor}
                    onOpenAttributeHierarchyDialog={onOpenAttributeHierarchyDialog}
                />
            )}
            {shouldDisplayAttributeHierarchyDialog ? (
                <AttributeHierarchyDialog
                    initialAttributeRef={attributeDescriptor?.attributeHeader.formOf.ref}
                    editingAttributeHierarchy={editingAttributeHierarchyRef.current}
                    onClose={onCloseAttributeHierarchyDialog}
                    onSaveOrUpdateSuccess={onSaveAttributeHierarchy}
                    onDeleteSuccess={onDeleteAttributeHierarchy}
                />
            ) : null}
        </>
    );
};

export default DrillTargetAttributeHierarchyItem;