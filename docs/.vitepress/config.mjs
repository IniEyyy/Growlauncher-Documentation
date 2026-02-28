import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Growlauncher API Docs',
  // base: '/Growlauncher-Documentation/',
  description: 'Complete API documentation for Growlauncher',
  lang: 'en-US',
  
  // Disable dead link checking for now
  ignoreDeadLinks: true,
  
  themeConfig: {
    outline: {
      level: [2, 3],
      label: "On this page"
    },
    
    search: {
      provider: "local"
    },

    editLink: {
      pattern: 'https://github.com/IniEyyy/Growlauncher-Documentation/edit/main/docs/:path'
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started" },
      { text: "Functions", link: "/functions/" },
      { text: "Structs", link: "/structs/" },
      { text: "ImGui", link: "/imgui/" },
      { text: "Hooks", link: "/hooks/" },
      { text: "Namespaces", link: "/namespaces/" },
      { text: "Enums", link: "/enums/" }
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Overview", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" }
        ]
      },
      {
        text: "Functions",
        collapsed: false,
        items: [
          { text: "Functions Index", link: "/functions/" },
          { text: "Console", link: "/functions/console" },
          { text: "Network", link: "/functions/network" },
          { text: "Player Info", link: "/functions/player-info" },
          { text: "Item Info", link: "/functions/item-info" },
          { text: "World & Game State", link: "/functions/world-state" },
          { text: "Math & Utility", link: "/functions/math-utility" }
        ]
      },
      {
        text: "Structs",
        collapsed: false,
        items: [
          { text: "Structs Overview", link: "/structs/" },
          { text: "Vectors", link: "/structs/vectors" },
          { text: "Variants", link: "/structs/variants" },
          { text: "Game Objects", link: "/structs/game-objects" },
          { text: "Player", link: "/structs/player" },
          { text: "NPC", link: "/structs/npc" },
          { text: "Tiles", link: "/structs/tiles" },
          { text: "WorldTileMap", link: "/structs/worldtilemap" }
        ]
      },
      {
        text: "ImGui",
        collapsed: false,
        items: [
          { text: "ImGui Overview", link: "/imgui/" },
          { text: "Context Creation & Access", link: "/imgui/context" },
          { text: "Main Functions", link: "/imgui/main" },
          { text: "Demo & Debug Utilities", link: "/imgui/demo" },
          { text: "Style Management", link: "/imgui/style" },
          { text: "Window Management", link: "/imgui/window" },
          { text: "Child Windows", link: "/imgui/child-windows" },
          { text: "Window Utilities", link: "/imgui/window-utilities" },
          { text: "Content Region", link: "/imgui/content-region" },
          { text: "Scrolling", link: "/imgui/scrolling" },
          { text: "Style Stacks", link: "/imgui/style-stacks" },
          { text: "Cursor & Layout", link: "/imgui/cursor-layout" },
          { text: "ID Management", link: "/imgui/id-management" },
          { text: "Text Widgets", link: "/imgui/text-widgets" },
          { text: "Main Widgets", link: "/imgui/main-widgets" },
          { text: "Color Editor/Picker", link: "/imgui/color-editor" },
          { text: "Trees", link: "/imgui/trees" },
          { text: "Selectables", link: "/imgui/selectables" },
          { text: "List Boxes", link: "/imgui/list-boxes" },
          { text: "Data Plotting", link: "/imgui/data-plotting" },
          { text: "Value Helpers", link: "/imgui/value-helpers" },
          { text: "Menus", link: "/imgui/menus" },
          { text: "Tooltips", link: "/imgui/tooltips" },
          { text: "Popups & Modals", link: "/imgui/popups-modals" },
          { text: "Columns", link: "/imgui/columns" },
          { text: "Tab Bars & Tabs", link: "/imgui/tabs" },
          { text: "Logging", link: "/imgui/logging" },
          { text: "Drag & Drop", link: "/imgui/drag-drop" },
          { text: "Clipping", link: "/imgui/clipping" },
          { text: "Focus & Activation", link: "/imgui/focus-activation" },
          { text: "Item Utilities", link: "/imgui/item-utilities" },
          { text: "Viewports", link: "/imgui/viewports" },
          { text: "Miscellaneous Utilities", link: "/imgui/misc" },
          { text: "Input Handling", link: "/imgui/input" },
          { text: "Input Text Widgets", link: "/imgui/input-text" },
          { text: "Image Functions", link: "/imgui/image" },
          { text: "Docking", link: "/imgui/docking" },
          { text: "Tables", link: "/imgui/tables" },
          { text: "State Management", link: "/imgui/state" },
          { text: "Memory Management", link: "/imgui/memory" },
          { text: "Enums & Constants", link: "/imgui/enums" }
        ]
      },
      {
        text: "Hooks, Callbacks & Concurrency",
        collapsed: false,
        items: [
          { text: "Hooks & Callbacks", link: "/hooks/" },
          { text: "Thread & Coroutine", link: "/hooks/thread-coroutine" }
        ]
      },
      {
        text: "Namespaces",
        collapsed: false,
        items: [
          { text: "Namespaces Overview", link: "/namespaces/" },
          { text: "ItemInfoManager", link: "/namespaces/item-info-manager" },
          { text: "Tile", link: "/namespaces/tile" },
          { text: "Growtopia", link: "/namespaces/growtopia" },
          { text: "Growlauncher", link: "/namespaces/growlauncher" },
          { text: "Preferences", link: "/namespaces/preferences" },
          { text: "UserInterface", link: "/namespaces/user-interface" },
          { text: "UIManager", link: "/namespaces/ui-manager" }
        ]
      },
      {
        text: "Enums",
        collapsed: false,
        items: [
          { text: "Enums Overview", link: "/enums/" },
          { text: "Menu Types", link: "/enums/menu-types" },
          { text: "Packet Types", link: "/enums/packet-types" }
        ]
      }
    ]
  }
})
