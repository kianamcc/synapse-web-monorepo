import{U as L}from"./UpsetPlot-DYO67wrj.js";import{f as u}from"./index-D_uphd4Y.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-F1goY8Fi.js";import"./DefaultPropsProvider-Bvki0pxK.js";import"./createTheme-0xQbh0hV.js";import"./index-0Exjkr72.js";import"./iframe-DaXup4WN.js";import"./Button-iINO5mWw.js";import"./createSimplePaletteValueFilter-Dn2ZSDDm.js";import"./useTimeout-DxKu314J.js";import"./ButtonBase-CxDf0Iya.js";import"./useForkRef-vAoaxSvE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BrXv9hhK.js";import"./useFiles-6UDrmTYG.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-hypBLRKL.js";import"./OrientationBanner-D-Ad_KzJ.js";import"./index-DO9i5fSP.js";import"./spreadSx-CwcO6WA9.js";import"./react-CP4ZqcKH.js";import"./FullWidthAlert-tLGyCqCx.js";import"./Alert-CoPbwJdQ.js";import"./useSlot-Dq0xnqmg.js";import"./createSvgIcon-D_tiKqbD.js";import"./Close-Cpm6LQZy.js";import"./IconButton-DjNjSMkw.js";import"./Paper-D8dnleYW.js";import"./useTheme-D8-A-0a-.js";import"./useTheme-CtlMRJLD.js";import"./Stack-DRTbJTt6.js";import"./useThemeProps-C1t7O8fM.js";import"./getThemeProps-CRJRiPRc.js";import"./extendSxProp-DKGbTOnE.js";import"./Box-CFRP72jt.js";import"./AlertTitle-Cez2UsjB.js";import"./Typography-CCOQQgSX.js";import"./index-CbCbsN5e.js";import"./ClickAwayListener-DWpjaqTE.js";import"./getReactElementRef-CCy5tafl.js";import"./index-CQx7vtrI.js";import"./index-Bo63NWas.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-a2S7IfBI.js";import"./Tooltip-BNN4uyZR.js";import"./index-DGgpv3HQ.js";import"./useControlled-DViJgbiZ.js";import"./Popper-EPaPs2kP.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-lQ2tabsY.js";import"./QueryClientProvider-BqxA2MMk.js";import"./Link-BZBSuM24.js";import"./Collapse-BuJTwuq3.js";import"./_baseUniq-D2qgl31R.js";import"./_Uint8Array-Bup5ZD9h.js";import"./isArray-PqDzEjBo.js";import"./_getTag-DAcmkE1f.js";import"./isEqual-DTMJ7tsS.js";import"./noop-DX6rZLP_.js";import"./merge-eG4gq0oP.js";import"./_initCloneObject-w3_8_Tro.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BoYFynpn.js";import"./inputBaseClasses-Cp73c6Jl.js";import"./calculateFriendlyFileSize-dtY2LNqn.js";import"./CheckCircleTwoTone-CBnB5HgO.js";import"./InfoTwoTone-C0kEYjXG.js";import"./useMutation-DhZrwB6t.js";import"./dayjs.min-AYuUP0Eh.js";import"./chunk-AYJ5UCUI-CCUScnZb.js";import"./cloneDeep-C09cW0zA.js";import"./Skeleton-mTacaXMJ.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B8V2JRyW.js";import"./Backdrop-Dm12SVZr.js";import"./LinearProgress-DBxT16AH.js";import"./index-1XqFDTGc.js";import"./index-D56TziHM.js";import"./index-m2kEhtfK.js";import"./const-BP60AzNb.js";import"./index-V03htJ_x.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
