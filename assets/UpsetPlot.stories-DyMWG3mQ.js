import{U as L}from"./UpsetPlot-Cb6CYCOl.js";import{f as u}from"./index-Cb8trhnm.js";import"./jsx-runtime-CmPIAL3R.js";import"./index-CPAysl28.js";import"./iframe-QVaIwGim.js";import"./LargeButton-BMN6dI-Z.js";import"./DefaultPropsProvider-CnfF9-Rb.js";import"./createTheme-DbiXvULE.js";import"./Button-YR-ir9vf.js";import"./ButtonBase-CpR5inzy.js";import"./useTimeout-yyO-i-xC.js";import"./TransitionGroupContext-BSRsHy0V.js";import"./useForkRef-ig00w_A-.js";import"./useIsFocusVisible-BXrQNL1d.js";import"./useEventCallback-BOxHP3Qg.js";import"./useFiles-CmCgIeiW.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-Bc9QkOuy.js";import"./OrientationBanner-C0xDeZrc.js";import"./index-Cfi_5BoH.js";import"./spreadSx-CwcO6WA9.js";import"./react-DdODerWs.js";import"./FullWidthAlert-CvUbrEPM.js";import"./Alert-CgoZYfUp.js";import"./resolveComponentProps-C_PwEHlD.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-80tXWpUn.js";import"./Close-CiQ4NjwL.js";import"./IconButton-BMcfXnSR.js";import"./Paper-r1jl6Dpp.js";import"./Stack-Ctx1XrrG.js";import"./getThemeProps-DF9R0_70.js";import"./useTheme-DZzq6rBq.js";import"./Box-kZGPzUZt.js";import"./AlertTitle-B5ZGPuqh.js";import"./Typography-DfZQX40p.js";import"./useTheme-DqGtWJHD.js";import"./Grow-DEfANa_e.js";import"./index-Be48diex.js";import"./utils-DIxQ68J5.js";import"./ClickAwayListener-DA4X__Yz.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Bv2IYlCg.js";import"./index-CYokp0Sh.js";import"./useControlled-CM8uzyV4.js";import"./useId-fgnRTItM.js";import"./Popper-BtCISb9F.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-tUAo3_tB.js";import"./utils-B4Lkbc1h.js";import"./Link-BcZTHBP_.js";import"./Collapse-Cowqr0Rv.js";import"./isNil-mIoS0wuh.js";import"./_Uint8Array-DB8Kyaej.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-P-b5C6_6.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-6dzMR-mO.js";import"./_getTag-DWiVyzA_.js";import"./tinycolor-Begke6kS.js";import"./Fade-BA0eqmYo.js";import"./Skeleton-CKTyZAmZ.js";import"./inputBaseClasses-BZ6K1IEd.js";import"./calculateFriendlyFileSize-aUiohfss.js";import"./CheckCircleTwoTone-D1KX2BuI.js";import"./InfoTwoTone-DJBg44qu.js";import"./useMutation-Bl5Kk_05.js";import"./isEqual-DHqGUy3F.js";import"./dayjs.min-DGPe2AkK.js";import"./chunk-AYJ5UCUI-ClSnvEhG.js";import"./cloneDeep-DR4FZuwC.js";import"./_initCloneObject-neulzZJe.js";import"./merge-dsrSF2eN.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-Bu5uTZ7Y.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-3fkeEJQU.js";import"./Backdrop-D_Yla7EQ.js";import"./LinearProgress-CzH8AMNj.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
