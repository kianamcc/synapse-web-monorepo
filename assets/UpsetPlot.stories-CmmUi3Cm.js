import{U as L}from"./UpsetPlot-BJOu206Q.js";import{f as u}from"./index-D_cyMREd.js";import"./jsx-runtime-5V4FT3Kv.js";import"./index-BsDJGuG7.js";import"./iframe-BhfxnZs8.js";import"./LargeButton-BOpRJr_-.js";import"./DefaultPropsProvider-DXLQE8lZ.js";import"./createTheme-Bx_6hso5.js";import"./Button-CAMJXbHu.js";import"./createSimplePaletteValueFilter-BCRasMuj.js";import"./useTimeout-CKAPd5h7.js";import"./ButtonBase-BMHnZ5Xj.js";import"./useForkRef-BXWNwB78.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BWcICyRh.js";import"./useFiles-Cr7TbnGq.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-MkQ_c7mA.js";import"./OrientationBanner-DqBfPRcF.js";import"./index-BhSudjU7.js";import"./spreadSx-CwcO6WA9.js";import"./react-NPMrUV4h.js";import"./FullWidthAlert-Bz7csA4g.js";import"./Alert-Bl_1vjyA.js";import"./useSlot-DMlCntah.js";import"./createSvgIcon-CPu07qPr.js";import"./Close-BdcIYPzN.js";import"./IconButton-D1whgVvs.js";import"./Paper-D_zxpmzK.js";import"./useTheme-D_f1sKc-.js";import"./useTheme-Chj9yEMG.js";import"./Stack-CpjT1kSx.js";import"./extendSxProp-DayZZBSa.js";import"./getThemeProps-BJ2M0tqL.js";import"./Box-DXz1EWn6.js";import"./AlertTitle-BBXbAgXa.js";import"./Typography-B2qjncXA.js";import"./index-BK5Ern9U.js";import"./ClickAwayListener-B5sfNDkG.js";import"./getReactElementRef-Quyt_ej6.js";import"./index-vxSVzDii.js";import"./index-D_MZvsil.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bdc_wmCE.js";import"./Tooltip-W2aXJr8G.js";import"./index-CQfBwZoQ.js";import"./useControlled-DHqSgfGl.js";import"./Popper-Ha1u7XjY.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-DPOme0OC.js";import"./utils-BzjeDrhH.js";import"./Link-B_dsnc4U.js";import"./Collapse-vG9666Kr.js";import"./isNil-Dwsczsb_.js";import"./_Uint8Array-DMPQXeqV.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-fhzVqEI1.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BGpIrJtQ.js";import"./_getTag-Dqa4k8TS.js";import"./tinycolor-Begke6kS.js";import"./Fade-Q-eCOSTL.js";import"./inputBaseClasses-CiW1ZL1N.js";import"./calculateFriendlyFileSize-CH09N0mc.js";import"./CheckCircleTwoTone-CwWsjzjm.js";import"./InfoTwoTone-KVhSQovP.js";import"./useMutation-CsR2E802.js";import"./dayjs.min-d4WqHm_h.js";import"./chunk-AYJ5UCUI-CD_JlbPy.js";import"./cloneDeep-6SgeCJbP.js";import"./_initCloneObject-efs9WPJ4.js";import"./Skeleton-B-8yqoZc.js";import"./merge-DC1AzhSP.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-j8zfNzOb.js";import"./Backdrop-DcLc5rk2.js";import"./LinearProgress-kl98r7KE.js";import"./index-IDfhHkZJ.js";import"./index-BWPhNaAB.js";import"./index-CcADlRfL.js";import"./const-Doag8klc.js";import"./index-KYGGQV6Y.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
