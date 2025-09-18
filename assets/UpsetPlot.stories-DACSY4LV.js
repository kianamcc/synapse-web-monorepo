import{U as L}from"./UpsetPlot-Lr7T1VKP.js";import{f as u}from"./index-SsjIhpK2.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DFfl0-x3.js";import"./DefaultPropsProvider-BXO4TWC4.js";import"./createTheme-DZ5nL_rD.js";import"./index-e0gfIe59.js";import"./iframe-BykbFxtt.js";import"./Button-BfMqvXfX.js";import"./createSimplePaletteValueFilter-CF7npJyo.js";import"./useTimeout-CPA5u6a1.js";import"./ButtonBase-BnHn_Q7I.js";import"./useForkRef-Da1jJIxy.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-8WX2PHjm.js";import"./useFiles-Bzh7cwSR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Cfptkbxn.js";import"./OrientationBanner-BRaa9FhH.js";import"./index-5nsOKCAP.js";import"./spreadSx-CwcO6WA9.js";import"./react-Tbf_FGby.js";import"./FullWidthAlert-lqqowgmg.js";import"./Alert-DJWPc08H.js";import"./useSlot-Tl_LvtWA.js";import"./createSvgIcon-DHoJCVf_.js";import"./Close-Dn-7A1g-.js";import"./IconButton-jukvnqEw.js";import"./Paper-lhCzxmF6.js";import"./useTheme-DvD79klM.js";import"./useTheme-BofUFEde.js";import"./Stack-DRojLg_k.js";import"./extendSxProp-B3-VAj6h.js";import"./getThemeProps-CK3Siddv.js";import"./Box-D2JVrGlt.js";import"./AlertTitle-9gNSrwOn.js";import"./Typography-CBY8PIjO.js";import"./index-ZPl0cf62.js";import"./ClickAwayListener-DNzX9DT0.js";import"./getReactElementRef-BYc5C6-D.js";import"./index-DmqEK8gc.js";import"./index-CG2KDzrf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-djj4PY0Q.js";import"./Tooltip-DBn857d-.js";import"./index-VFqd6hI8.js";import"./useControlled-B6WrK4gM.js";import"./Popper-CF8GC9gQ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-UseW8DYW.js";import"./QueryClientProvider-BFHjxVWG.js";import"./Link-Ci0L2TZX.js";import"./Collapse-DRGIUl1p.js";import"./_baseUniq-BWniF09F.js";import"./_Uint8Array-DRwdx9zQ.js";import"./isArray-BWZ6pEjw.js";import"./_getTag-Ba0gOkA8.js";import"./isEqual-DY4B9NNb.js";import"./merge-CTHP0e9H.js";import"./_initCloneObject-DcJdSeqq.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DeZ64Lam.js";import"./inputBaseClasses-nogW3mFW.js";import"./calculateFriendlyFileSize-EaC3OCDx.js";import"./CheckCircleTwoTone-CMZ5_-d0.js";import"./InfoTwoTone-C9bnm_ar.js";import"./useMutation-CC6bXeSn.js";import"./dayjs.min-CQRDHmGP.js";import"./chunk-AYJ5UCUI-BdnfJrS7.js";import"./cloneDeep-DUWVacao.js";import"./Skeleton-BKSNtuOK.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D_FlyjbD.js";import"./Backdrop-D_dZaA8_.js";import"./LinearProgress-CwYVqvPP.js";import"./index-Cw0fo5km.js";import"./index-CxWbGFtV.js";import"./index-BQOHWkh-.js";import"./const-BP60AzNb.js";import"./index-LwI5O3vL.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,jt as __namedExportsOrder,$t as default};
