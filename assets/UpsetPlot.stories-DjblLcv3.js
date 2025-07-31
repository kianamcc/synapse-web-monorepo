import{U as L}from"./UpsetPlot-DGdUN6Gp.js";import{f as u}from"./index-BdglDrNn.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-PEzs4Qvw.js";import"./DefaultPropsProvider-yxrvof5g.js";import"./createTheme-DGgAS1a0.js";import"./index-DekDrv5U.js";import"./iframe-xOtD_P08.js";import"./Button-D40Zhcb7.js";import"./createSimplePaletteValueFilter-CE8ANL5W.js";import"./useTimeout-DCLeLvrm.js";import"./ButtonBase-6Ipi50Sa.js";import"./useForkRef-DdlWqvUN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CBK_4Jzb.js";import"./useFiles-Bxoq74W1.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-bPA3jx3g.js";import"./OrientationBanner-DjBSegk4.js";import"./index-BqxOcilS.js";import"./spreadSx-CwcO6WA9.js";import"./react-DQOsi25R.js";import"./FullWidthAlert-XhN78nMn.js";import"./Alert-DgpsuEDM.js";import"./useSlot-U_5V9nQt.js";import"./createSvgIcon-BVtQtlbr.js";import"./Close-ByO53hPG.js";import"./IconButton-BPt8RjMd.js";import"./Paper-DHIyyYeU.js";import"./useTheme-SkvSa3Kb.js";import"./useTheme-CSaxHqJ0.js";import"./Stack-DD06Xyor.js";import"./extendSxProp-Dat37SoK.js";import"./getThemeProps--Opgi1nt.js";import"./Box-4fm9HeDO.js";import"./AlertTitle-DJOygBJo.js";import"./Typography-DpBU7RE3.js";import"./index-BaH9B4UY.js";import"./ClickAwayListener-D3hU6Bma.js";import"./getReactElementRef-48OajlW4.js";import"./index-CPxWKARk.js";import"./index-CSAUMugE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DfR_kMvq.js";import"./Tooltip-Ccn8-lSb.js";import"./index-COrw31tV.js";import"./useControlled-jNTvzdXz.js";import"./Popper-C6uM_dFE.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-B19SlrCI.js";import"./QueryClientProvider-focFpRxi.js";import"./Link-wjZTF39g.js";import"./Collapse-DdDCTjzD.js";import"./_baseUniq-Dt2R7aMK.js";import"./_Uint8Array-DNek21vR.js";import"./isArray-6HCTP6v0.js";import"./_getTag-CNfqqmnI.js";import"./isEqual-DWZ9NqeB.js";import"./merge-DlHIOFqX.js";import"./_initCloneObject-LXo2HX0d.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DaN_oF-_.js";import"./inputBaseClasses-DHOenmRP.js";import"./calculateFriendlyFileSize-C83f4eNI.js";import"./CheckCircleTwoTone-FuMeDJ5x.js";import"./InfoTwoTone-Dmo2a4FZ.js";import"./useMutation-xW35TMs8.js";import"./dayjs.min-D7aFDZ52.js";import"./chunk-AYJ5UCUI-CrcqNdyv.js";import"./cloneDeep-rOrdiiRY.js";import"./Skeleton-J3yONnu9.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DN0gxc1R.js";import"./Backdrop-gb3E-fsc.js";import"./LinearProgress-B5W8Wy4y.js";import"./index-dV5PUuSE.js";import"./index-lvlUTbWl.js";import"./index-BZLpK9Nc.js";import"./const-BP60AzNb.js";import"./index-BHPW5XQn.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
