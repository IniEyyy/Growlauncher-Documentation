import { defineConfig } from 'vitepress'



export default defineConfig({

  title: 'Growlauncher API Docs',

  base: '/Growlauncher-Documentation/',

  description: 'Complete API documentation for Growlauncher - Lua scripting, ImGui integration, and game automation tools',

  lang: 'en-US',

  

  // PWA Configuration

  pwa: {

    manifest: {

      name: 'Growlauncher API Docs',

      short_name: 'Growlauncher',

      description: 'Complete API documentation for Growlauncher',

      theme_color: '#8B5CF6',

      background_color: '#0a0f1c',

      display: 'standalone',

      icons: [

        {

          src: '/favicon.svg',

          sizes: '192x192',

          type: 'image/svg+xml'

        }

      ]

    }

  },

  

  // Sitemap Configuration

  sitemap: {

    hostname: 'https://inieyyy.github.io/Growlauncher-Documentation/'

  },

  

  head: [

    ['link', { rel: 'icon', href: '/Growlauncher-Documentation/favicon.svg' }],

    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],

    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],

    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&family=Alumni+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' }],

    ['meta', { name: 'keywords', content: 'Growlauncher, Powerkuy, Lua, API, documentation, ImGui, scripting, automation, Growtopia' }],

    ['meta', { name: 'author', content: 'PowerKuy' }],

    ['meta', { property: 'og:title', content: 'Growlauncher API Documentation' }],

    ['meta', { property: 'og:description', content: 'Complete API documentation for Growlauncher Lua scripting' }],

    ['meta', { property: 'og:type', content: 'website' }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]

  ],

  

  ignoreDeadLinks: false,

  

  themeConfig: {

    siteTitle: 'Growlauncher',

    search: {

      provider: "local",

      options: {

        locales: {

          id: {

            translations: {

              button: {

                buttonText: 'Cari Dokumentasi',

                buttonAriaLabel: 'Cari dokumentasi'

              },

              modal: {

                noResultsText: 'Tidak ada hasil yang ditemukan',

                resetButtonTitle: 'Hapus pencarian',

                footer: {

                  selectText: 'Pilih',

                  navigateText: 'Navigasi'

                }

              }

            }

          }

        }

      }

    },



    editLink: {

      pattern: 'https://github.com/IniEyyy/Growlauncher-Documentation/edit/main/docs/:path'

    },

    outline: {
      level: [2, 3, 4],
      label: 'On this page'
    },



    nav: [

      { text: "Home", link: "/" },

      { text: "Getting Started", link: "/getting-started" },

      {
        text: "Reference",
        items: [
          { text: "Functions", link: "/functions/" },
          { text: "Structs", link: "/structs/" },
          { text: "ImGui", link: "/imgui/" },
          { text: "Hooks", link: "/hooks/" },
          { text: "Namespaces", link: "/namespaces/" },
          { text: "Enums", link: "/enums/" }
        ]
      },

      { text: "Examples", link: "/examples" },

      { text: "Changelog", link: "/changelog" },

      { text: "Team", link: "/team" }

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

          { text: "Math & Utility", link: "/functions/math-utility" },

          { text: "Hooks & Callbacks", link: "/functions/hooks-callbacks" },

          { text: "Threading & Coroutine", link: "/functions/threading" },

          { text: "Value Functions", link: "/functions/value-functions" },

          { text: "Module Functions", link: "/functions/module-functions" }

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

          { text: "Demo & Debug Utilities", link: "/imgui/demo" },

          { text: "Window Management", link: "/imgui/window" },

          { text: "Child Windows", link: "/imgui/child-windows" },

          { text: "Window Utilities", link: "/imgui/window-utilities" },

          { text: "Content Region", link: "/imgui/content-region" },

          { text: "Scrolling", link: "/imgui/scrolling" },

          { text: "Style Stacks", link: "/imgui/style-stacks" },

          { text: "Cursor & Layout", link: "/imgui/cursor-layout" },

          { text: "Text Widgets", link: "/imgui/text-widgets" },

          { text: "Main Widgets", link: "/imgui/main-widgets" },

          { text: "Color Editor/Picker", link: "/imgui/color-editor" },

          { text: "Trees", link: "/imgui/trees" },

          { text: "Selectables", link: "/imgui/selectables" },

          { text: "Data Plotting", link: "/imgui/data-plotting" },

          { text: "Menus", link: "/imgui/menus" },

          { text: "Popups & Modals", link: "/imgui/popups-modals" },

          { text: "Columns", link: "/imgui/columns" },

          { text: "Tab Bars & Tabs", link: "/imgui/tabs" },

          { text: "Drag & Drop", link: "/imgui/drag-drop" },

          { text: "Focus & Activation", link: "/imgui/focus-activation" },

          { text: "Item Utilities", link: "/imgui/item-utilities" },

          { text: "Miscellaneous Utilities", link: "/imgui/misc" },

          { text: "Input Handling", link: "/imgui/input" },

          { text: "Input Text Widgets", link: "/imgui/input-text" },

          { text: "Image Functions", link: "/imgui/image" },

          { text: "Tables", link: "/imgui/tables" }

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

      },

      {

        text: "Examples",

        collapsed: false,

        items: [

          { text: "Examples Overview", link: "/examples" }

        ]

      }

    ], 

    socialLinks: [

      { icon: 'github', link: 'https://github.com/IniEyyy/Growlauncher-Documentation' },

      { icon: 'discord', link: 'https://discord.gg/powerkuyofficial' }

    ],

    

    footer: {

      message: 'Join our community for support and updates!',

      copyright: `Copyright ${new Date().getFullYear()} PowerKuy`,

      copyrightExtra: 'Made with by the Growlauncher community'

    }

  }

})
