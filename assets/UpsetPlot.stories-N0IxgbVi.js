import{U as L}from"./UpsetPlot-49rGw_aj.js";import{f as u}from"./index-2XibSSkS.js";import"./jsx-runtime-CfniUVqD.js";import"./index-w8r01unF.js";import"./iframe-CUCSdczr.js";import"./LargeButton-D38QgbMc.js";import"./DefaultPropsProvider-CbfxmOUo.js";import"./createTheme-Dy24wF_1.js";import"./Button-DcA6Wnl8.js";import"./ButtonBase-CXLjw9mJ.js";import"./useTimeout-Bu1cnb2B.js";import"./TransitionGroupContext-DqohVvaO.js";import"./useForkRef-D7k89ytA.js";import"./useIsFocusVisible-hjtORhQC.js";import"./useEventCallback-CFNiwpIz.js";import"./useFiles-BK3Gh0_l.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-2Xj6Yp9b.js";import"./OrientationBanner-TpvFF3Ts.js";import"./index-BSHGj6el.js";import"./spreadSx-CwcO6WA9.js";import"./react-DlNSOGk7.js";import"./FullWidthAlert-BBqcXFew.js";import"./Alert-Cv2aYRot.js";import"./resolveComponentProps-ma8JMEbU.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-l6KdUt_U.js";import"./Close-BFG1LR7b.js";import"./IconButton-URRSVn69.js";import"./Paper-D0_uR9Sy.js";import"./Stack-B5FK2opb.js";import"./getThemeProps-CUgjtIi1.js";import"./useTheme-D-9dB31D.js";import"./Box-BkoKjff6.js";import"./AlertTitle-BL4ZbCob.js";import"./Typography-Db2qQfaM.js";import"./useTheme-D5QJEr0B.js";import"./Grow-BRrJzSUm.js";import"./index-Dtn10zyK.js";import"./utils-D80l6d7_.js";import"./ClickAwayListener-CvxkHeNi.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DxsSs5eW.js";import"./index-CYfQTFsZ.js";import"./useControlled-0G6SdZ8L.js";import"./useId-DskmTTOE.js";import"./Popper-VDjvMyAP.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-CT-b_ugC.js";import"./utils-Dycl1YZq.js";import"./Link-Cjca69dE.js";import"./Collapse-C36U9yxB.js";import"./isNil-CgpPL_Iw.js";import"./_Uint8Array-BuM38brZ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DD2yD6S-.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-E8uLXCBr.js";import"./_getTag-WOUCB7X1.js";import"./tinycolor-Begke6kS.js";import"./Fade-DH2_TrMQ.js";import"./Skeleton-CvR3Skml.js";import"./inputBaseClasses-DljKtXei.js";import"./calculateFriendlyFileSize-CMfGmUEf.js";import"./CheckCircleTwoTone-BQWHkcPQ.js";import"./InfoTwoTone-CKODhZkq.js";import"./useMutation-BPptyNQx.js";import"./isEqual-C71nV6ON.js";import"./dayjs.min-CMsY32ZI.js";import"./chunk-AYJ5UCUI-DQQgLh9r.js";import"./cloneDeep-Q3oOVsTG.js";import"./_initCloneObject-CzY22ryU.js";import"./merge-Cj45Y_uR.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CVxycwJL.js";import"./Backdrop-Qcdm6Zl-.js";import"./LinearProgress-BdLazhQX.js";import"./index-B3Yd8ehj.js";import"./index-Dusyk5Nf.js";import"./index-BDYwo0Z1.js";import"./const-Doag8klc.js";import"./index-Bn7ToCYx.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
