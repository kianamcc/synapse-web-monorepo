import{x as p,a2 as m,jS as s,b as r,cu as n,fX as g}from"./iframe-Bvv4ID9O.js";import{r as l}from"./mockHomepageQueryResultData-BzUFom3f.js";import{b as c}from"./SynapseHomepageV2-Cantqy1c.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-CJv_oPim.js";import"./SynapsePlans-D--2yLMG.js";import"./index-BNRiQ8Kc.js";import"./Plot-DqSf5_N5.js";import"./index-Chjiymov.js";import"./Card-ibXZcJOb.js";import"./Chip-CH6SKqjX.js";import"./index-TPGr2WBQ.js";import"./SynapseNavDrawer-PhWNInpd.js";import"./useDataAccessSubmission-Dof4IbnR.js";import"./useInfiniteQuery-DnzzjwPo.js";import"./useDownloadList-BKnv5X2n.js";import"./waitForAsyncResult-CaQ4j6ac.js";import"./CreateProjectModal-CiidCA3L.js";import"./ConfirmationDialog-BWepRO3O.js";import"./DialogBase-DI9hpM3M.js";import"./Close-gfuBCl1y.js";import"./HelpPopover-KjW2Liz1.js";import"./MarkdownPopover-DtkdEBJk.js";import"./LightTooltip-BbQfoeul.js";import"./MarkdownSynapse-BqihxWd0.js";import"./SkeletonButton-CX_iqB-U.js";import"./SkeletonInlineBlock-B4dGOeql.js";import"./SkeletonTable-CrAxGwqy.js";import"./SkeletonParagraph-BrF-J-9t.js";import"./SynapseHomepageNavBar-BzoIS63r.js";import"./SageResourcesPopover-mcf-qrSM.js";import"./Grid-LuVi20o5.js";import"./MenuItem-CfdXNe3p.js";import"./UserBadge-fKQtuujV.js";import"./Slide-BGcvVclH.js";import"./InputAdornment-BTx3RwlH.js";import"./listItemButtonClasses-DYJBi0XT.js";import"./Badge-DUY1uZy_.js";import"./usePreviousProps-tpWW8mks.js";import"./useGetEntityHeaders-BH9Feabo.js";import"./NavigateNext-BUtUqGND.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    gotoPlace: (href: string) => {
      window.alert(\`SynapseHomepageV2 calling back to change route to \${href}\`);
    }
  },
  loaders: [() => {
    registerSynapseHomepageMockQueries();
  }],
  parameters: {
    stack: 'production',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0'
    },
    msw: {
      handlers: [...getFileHandlers(MOCK_REPO_ORIGIN), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), getFeatureFlagsOverride({
        portalOrigin: PRODUCTION_ENDPOINT_CONFIG.PORTAL,
        overrides: {
          [FeatureFlagEnum.HOMEPAGE_CHATBOT]: true
        }
      })]
    }
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const oe=["DemoVersion2"];export{e as DemoVersion2,oe as __namedExportsOrder,re as default};
