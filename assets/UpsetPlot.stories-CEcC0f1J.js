import{U as L}from"./UpsetPlot-B62kbT9E.js";import{f as u}from"./index-DJLGd1lm.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CSA3Cohz.js";import"./DefaultPropsProvider-B-eVrFvd.js";import"./createTheme-C47Y87A4.js";import"./index-DTxXT8xi.js";import"./iframe-KWEd0gMy.js";import"./Button-oPXeTB6o.js";import"./createSimplePaletteValueFilter-JxKCDb-M.js";import"./useTimeout-BA5Bhh4c.js";import"./ButtonBase-BB75u1cV.js";import"./useForkRef-BS7QeJ96.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-tAN3gOWA.js";import"./useFiles-IUvKxpE9.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CFs9-P54.js";import"./OrientationBanner-CGogClZ-.js";import"./index-D0quDhpf.js";import"./spreadSx-CwcO6WA9.js";import"./react-B4sXsje5.js";import"./FullWidthAlert-B4anUMp_.js";import"./Alert-CTSNw1fZ.js";import"./useSlot-QF2CdK0N.js";import"./createSvgIcon-CVjfqiPX.js";import"./Close-qFP2Q57D.js";import"./IconButton-B5Ug_kUg.js";import"./Paper-Cr9fcRFU.js";import"./useTheme-DuBoDREd.js";import"./useTheme-D_Zdm0Cd.js";import"./Stack-B29pnm8B.js";import"./useThemeProps-CQdUp3Os.js";import"./getThemeProps-BchmXIDX.js";import"./extendSxProp-BXep7pNP.js";import"./Box-CNorT3jp.js";import"./AlertTitle-CvgMJ4Nj.js";import"./Typography-DTA26pXS.js";import"./index-DTH4m4Ei.js";import"./ClickAwayListener-BR_bUt97.js";import"./getReactElementRef-Dkhg43bH.js";import"./index-DkfTgz7N.js";import"./index-CdpVy2gR.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DB1geCA4.js";import"./Tooltip-4nKavIt1.js";import"./index-CcncV9V-.js";import"./useControlled-oxRzRN46.js";import"./Popper-CbfEzcwU.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-Bl_cGmi2.js";import"./QueryClientProvider-Cf6MCbvB.js";import"./Link-cokHj4fD.js";import"./Collapse-Dw-KvTKQ.js";import"./_baseUniq-BCVfyyLL.js";import"./_Uint8Array-4Rllf2Qd.js";import"./isArray-DTE_t_uz.js";import"./_getTag-CVbV9I50.js";import"./isEqual-DRGf7CXE.js";import"./noop-DX6rZLP_.js";import"./merge-BbaJJpoi.js";import"./_initCloneObject-BeYdggqJ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dq2lY4po.js";import"./inputBaseClasses-Cw2dFTbj.js";import"./calculateFriendlyFileSize-DICq4dzm.js";import"./CheckCircleTwoTone-Dg-3xUXQ.js";import"./InfoTwoTone-uhtZ8xGb.js";import"./useMutation-BBlMnXEp.js";import"./dayjs.min-BCaxwC-h.js";import"./chunk-AYJ5UCUI-nMwbF-XD.js";import"./cloneDeep-CX99sadt.js";import"./Skeleton-BVM_VZtv.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BbTp3r09.js";import"./Backdrop-pM7Bp62t.js";import"./LinearProgress-DV_c-hu4.js";import"./index-DXMgqq9h.js";import"./index-DNOZy9Vx.js";import"./index-CpnYpU8T.js";import"./const-BP60AzNb.js";import"./index-Cot1mRyq.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
