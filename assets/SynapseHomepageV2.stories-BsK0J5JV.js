import{C as t,b as e,a0 as a,jH as i,cc as p,fJ as m}from"./iframe-BbyAgVod.js";import{r as s}from"./mockHomepageQueryResultData-4JREVZYa.js";import{b as n}from"./SynapseHomepageV2-DhiU4KPf.js";import"./index-Chi_LkuB.js";import"./SageFullLogo-CBQZd5a2.js";import"./SynapsePlans-C0mwqGbL.js";import"./index-BOqyTSPI.js";import"./Plot-BJumO0Mm.js";import"./index-Chjiymov.js";import"./Card-BIlAp2RU.js";import"./Chip-DvcIhhPD.js";import"./index-QgGURz5J.js";import"./SynapseNavDrawer-BBGZ75XF.js";import"./useDataAccessSubmission-CeuRqy_9.js";import"./useInfiniteQuery-Cis8MpVG.js";import"./useDownloadList-DWdOYv58.js";import"./waitForAsyncResult-B2rxT93c.js";import"./useUserBundle-BZrAVgQo.js";import"./CreateProjectModal-CiJbB6Mv.js";import"./ConfirmationDialog-D-tV9GIR.js";import"./DialogBase-nCS3ahcQ.js";import"./Close-BBCw0Jfc.js";import"./HelpPopover-BKQ_lBJ3.js";import"./MarkdownPopover-BUo7fnkz.js";import"./LightTooltip-CjTxmPMX.js";import"./MarkdownSynapse-7KNTNWWL.js";import"./SkeletonButton-CvgBxsOq.js";import"./SkeletonInlineBlock-CGRSHTJp.js";import"./SkeletonTable-8hMWU9b8.js";import"./SkeletonParagraph-TSyA2Bdi.js";import"./SynapseHomepageNavBar-DiNIEnF4.js";import"./SageResourcesPopover-DplhhObC.js";import"./Grid-DUuNkSiV.js";import"./MenuItem-BOC7yxlQ.js";import"./UserBadge-BMeyNDaA.js";import"./useUserGroupHeader-BxByFlPX.js";import"./searchDefaults-DqjIRs8M.js";import"./Slide-CUt9uBqg.js";import"./InputAdornment-DTXjPlYE.js";import"./listItemButtonClasses-IvvjZyTY.js";import"./Badge-Br6e3vZd.js";import"./usePreviousProps-Ho5tQjOf.js";import"./useGetEntityHeaders-Domqg3ZE.js";import"./relativeTime-DVX9LeFM.js";import"./NavigateNext-UEtOr1vA.js";const er={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},r={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(e),...a(e),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const or=["DemoVersion2"];export{r as DemoVersion2,or as __namedExportsOrder,er as default};
