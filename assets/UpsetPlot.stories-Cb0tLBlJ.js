import{U as L}from"./UpsetPlot-BNEqF9JJ.js";import{f as u}from"./index-CzxhvID9.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-D2PfMcjw.js";import"./DefaultPropsProvider-C_zNEI2X.js";import"./createTheme-D1BQx7_9.js";import"./index-DTNlVjJ7.js";import"./iframe-HyGsmOq6.js";import"./Button-N-1HkUGf.js";import"./createSimplePaletteValueFilter-cVSg-Kao.js";import"./useTimeout-DtwR2-Vy.js";import"./ButtonBase-36aZ1yix.js";import"./useForkRef-U0ZDp63e.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-oD9nUD2d.js";import"./useFiles-B2N2HPUY.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Dgxzyngc.js";import"./OrientationBanner-CM4mQahX.js";import"./index-Ckx9wA1o.js";import"./spreadSx-CwcO6WA9.js";import"./react-C-ZrivrO.js";import"./FullWidthAlert-rFqRmBje.js";import"./Alert-8d9H3zz9.js";import"./useSlot-D3K8A8w7.js";import"./createSvgIcon-RS-D48a7.js";import"./Close-CvE2AhfC.js";import"./IconButton-pZgQcOFK.js";import"./Paper-CaF42frr.js";import"./useTheme-f5o2sVxe.js";import"./useTheme-BfaqaQGF.js";import"./Stack-DqCCF0aZ.js";import"./extendSxProp-iklfMelH.js";import"./getThemeProps-vMGdrB_u.js";import"./Box-BgNFQW5j.js";import"./AlertTitle-DbhJsyCT.js";import"./Typography-CdQn_xVC.js";import"./index-ChnvbaPR.js";import"./ClickAwayListener-DoRduBrz.js";import"./getReactElementRef-DwpSRZ2i.js";import"./index-C38Velpb.js";import"./index-DROQPanT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-h00VdCaE.js";import"./Tooltip-CF7TWlNa.js";import"./index-DFvo03aM.js";import"./useControlled-C_0taDzB.js";import"./Popper-CTII9iKp.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BeZx-JBU.js";import"./QueryClientProvider-CqRxmNge.js";import"./Link-B84UpXKP.js";import"./Collapse-D024h2Tt.js";import"./_baseUniq-DEewYuYN.js";import"./_Uint8Array-DPNJR1BB.js";import"./isArray-BNDnJ0cX.js";import"./_getTag-DxTQRKYo.js";import"./isEqual-Dv-V6DIZ.js";import"./merge-NB7svOIH.js";import"./_initCloneObject-DHMeHRbH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ByYPi2--.js";import"./inputBaseClasses-V0GV_T2d.js";import"./calculateFriendlyFileSize-C_Xem63m.js";import"./CheckCircleTwoTone-Dp5ZcmDN.js";import"./InfoTwoTone-BTeFVGl3.js";import"./useMutation-B0RPERva.js";import"./dayjs.min-2wFo7hOi.js";import"./chunk-AYJ5UCUI-CW1esgOs.js";import"./cloneDeep-i-w8KGzX.js";import"./Skeleton-BEqAEI4M.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-d-6ip2R1.js";import"./Backdrop-l3gtyMen.js";import"./LinearProgress-BZXl4Gwg.js";import"./index-D5KHqy_T.js";import"./index-7LyAGHEd.js";import"./index-WIVhm6sO.js";import"./const-BP60AzNb.js";import"./index-BaeTvdvq.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
