export default {
    editor: {
        label: {
            en: "Stack",
        },
        icon: "inbox-in",
        customSettingsPropertiesOrder: [
            "group",
            "items",
            "sortable",
            "readonly",
            "customDragHandle",
            ["handleClass"],
        ]
    },
    states: ['readonly'],
    triggerEvents: [
        {
            name: "item:moved",
            label: { en: "On item moved" },
            event: {
                item: {},
                oldIndex: 0,
                newIndex: 1,
                updatedList: [],
            },
        },
        {
            name: "item:added",
            label: { en: "On item added" },
            event: {
                item: {},
                newIndex: 1,
                updatedList: [],
            },
        },
        {
            name: "item:removed",
            label: { en: "On item removed" },
            event: {
                item: {},
                oldIndex: 0,
                updatedList: [],
            },
        },
    ],
    properties: {
        group: {
            hidden: (content, sidePanelContent, boundProps, wwProps) => !!(wwProps && wwProps.group),
            label: {
                en: "Group",
            },
            type: "Text",
            bindable: true,
            defaultValue: "common",
            section: "settings",
        },
        items: {
            hidden: (content, sidePanelContent, boundProps, wwProps) => !!(wwProps && wwProps.items),
            label: {
                en: "Items",
            },
            type: "Info",
            options: {
                text: { en: "Bind your data" },
            },
            bindable: true,
            defaultValue: [],
            section: "settings",
        },
        sortable: {
            hidden: (content, sidePanelContent, boundProps, wwProps) => !!(wwProps && wwProps.sortable),
            label: {
                en: "Sortable",
            },
            type: "OnOff",
            defaultValue: true,
            section: "settings",
        },
        itemElement: {
            hidden: true,
            defaultValue: [{ isWwObject: true, type: "ww-flexbox" }],
            navigator: {
                group: "Item",
            },
        },
        headerElement: {
            hidden: true,
            defaultValue: [{ isWwObject: true, type: "ww-text" }],
            navigator: {
                group: "Header",
            },
        },
        footerElement: {
            hidden: true,
            defaultValue: [],
            navigator: {
                group: "Footer",
            },
        },
        readonly: {
            label: { en: "Read only", fr: "Lecture seule" },
            type: "OnOff",
            section: "settings",
            bindable: true,
            defaultValue: false,
            /* wwEditor:start */
            bindingValidation: {
                type: "boolean",
                tooltip: "A boolean that defines if the input is in readonly: `true | false`",
            },
            /* wwEditor:end */
        },
        customDragHandle: {
            label: 'Custom drag',
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
            propertyHelp: {
                tooltip: `By default, dragging is triggered when a user clicks anywhere on a Kanban item. To trigger the dragging behavior on click of a specific element inside the item:  
* enable this option  
* go to that element’s Settings > HTML attributes, and  
* add the class you choose to its Class attribute.`
            },
            hidden: (content, sidePanelContent, boundProps, wwProps) => wwProps?.handle?.length,
        },
        handleClass: {
            label: "Handle class",
            type: "Text",
            bindable: true,
            section: "settings",
            defaultValue: "draggable",
            propertyHelp: {
                tooltip: 'This class must be added on elements to trigger the drag&drop. (Settings > HTML attributes > Class)'
            },
            options: {
                placeholder: "draggable",
            },
            /* wwEditor:start */
            bindingValidation: {
                type: "string",
                tooltip: "A string that represent the class of the handle",
            },
            /* wwEditor:end */
            hidden: (content, sidePanelContent, boundProps, wwProps) => !content.customDragHandle || wwProps?.handle?.length,
        },
    },
};
