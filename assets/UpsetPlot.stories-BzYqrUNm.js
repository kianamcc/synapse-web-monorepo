import{U as L}from"./UpsetPlot-B8r6wsrb.js";import{f as u}from"./index-UVKe9swa.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-5lehbMrQ.js";import"./DefaultPropsProvider-CSmwSXtp.js";import"./createTheme-BNZ2-g8i.js";import"./index-CxNQf4-_.js";import"./iframe-Dg4AUp8p.js";import"./Button-Joy47VZj.js";import"./createSimplePaletteValueFilter-BTCFvpVs.js";import"./useTimeout-CmN0NgJY.js";import"./ButtonBase-CYIBe76-.js";import"./useForkRef-DVZbic4O.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CpqZJiGb.js";import"./useFiles-BS7yqeVu.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DCD24UIR.js";import"./OrientationBanner-CGhK73qt.js";import"./index-VZePWZJ8.js";import"./spreadSx-CwcO6WA9.js";import"./react-BE2NnvmD.js";import"./FullWidthAlert-9fheV2TI.js";import"./Alert-DD6LY4o6.js";import"./useSlot-ZEQjcV4h.js";import"./createSvgIcon-px9Ll1Sh.js";import"./Close-8Omd6HQo.js";import"./IconButton-DdwXXYxc.js";import"./Paper-Bi_y7tq5.js";import"./useTheme-Ct9xyNCZ.js";import"./useTheme-Cwe9o9si.js";import"./Stack-BkBDhbY7.js";import"./useThemeProps-DYPM01el.js";import"./getThemeProps-z9TSZhd3.js";import"./extendSxProp-doqBFT6I.js";import"./Box-29dRnPqp.js";import"./AlertTitle-YP7vES6y.js";import"./Typography-CM0Hx7IB.js";import"./index-CylRv6A2.js";import"./ClickAwayListener-Bk5rN7ro.js";import"./getReactElementRef-CbfHskog.js";import"./index-DdouHa0C.js";import"./index-BHXNWvPG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DfWYfHBy.js";import"./Tooltip-BWVeFaIO.js";import"./index-BuW0orvV.js";import"./useControlled-CMSkeTs6.js";import"./Popper-DK9BpulM.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BmYDawry.js";import"./QueryClientProvider-BzV6DB3V.js";import"./Link-4Y6YnrJW.js";import"./Collapse-BssXeki7.js";import"./_baseUniq-Cqxswx2d.js";import"./_Uint8Array-DcB2X5w5.js";import"./isArray-KmhwUPCT.js";import"./_getTag-BUgEEbP5.js";import"./isEqual-BdiiYa5f.js";import"./noop-DX6rZLP_.js";import"./merge-CCPnLMoR.js";import"./_initCloneObject-DaAH_7Pj.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CYQ77buy.js";import"./inputBaseClasses-BSYFsfzv.js";import"./calculateFriendlyFileSize-C5Z4DbWG.js";import"./CheckCircleTwoTone-BjTNRj81.js";import"./InfoTwoTone-Dm6rZBIc.js";import"./useMutation-BLBDAaI6.js";import"./dayjs.min-pJYmqCac.js";import"./chunk-AYJ5UCUI-py0OTTT6.js";import"./cloneDeep-aIiF9cuR.js";import"./Skeleton-CXBbRm57.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BGXwziqf.js";import"./Backdrop-C_78sV1-.js";import"./LinearProgress-CEdgfN5D.js";import"./index-D2SV-dpy.js";import"./index-DUBdi6VO.js";import"./index-DSTprvvH.js";import"./const-BP60AzNb.js";import"./index-DW5xpYwZ.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Individuals (#) per Assay',
    combinationName: 'Individuals (#)',
    summaryLink: '#',
    summaryLinkText: 'Explore All Of Something',
    onClick: selection => {
      const sets = (selection as any).sets;
      const query: Query = {
        sql: 'select * from syn12345',
        // stub files sql
        selectedFacets: [{
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'Assays',
          facetValues: [...sets.values()].map((v: any) => v.name) as string[]
        }]
      };
      const url = \`/Explore/Data%20by%20Files?QueryWrapper0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: fn()
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    variant: 'ampals',
    onClick: fn()
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
