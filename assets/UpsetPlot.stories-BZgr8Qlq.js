import{U as L}from"./UpsetPlot-CrQwMixx.js";import{f as u}from"./index-BP267bdE.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BxSbcUOj.js";import"./DefaultPropsProvider-CPkErIBX.js";import"./createTheme-DlnlCWs-.js";import"./index-DFKD-tlO.js";import"./iframe-DPDZl7CU.js";import"./Button-FcYL-glf.js";import"./createSimplePaletteValueFilter-DIhWIqwL.js";import"./useTimeout-sYeuExjN.js";import"./ButtonBase-Dmd9LT3R.js";import"./useForkRef-BgCIv5Am.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DGpCod9i.js";import"./useFiles-4YAxzx0q.js";import"./VerificationSubmission-CNoSrCdk.js";import"./SynapseConstants-BurzPALN.js";import"./OrientationBanner-DP3WWY3f.js";import"./index-LjJS82Ec.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1yoBqs4.js";import"./FullWidthAlert-BUJuSc-c.js";import"./Alert-DQ-m75Fo.js";import"./useSlot-CuvyTh6A.js";import"./createSvgIcon-B4uCatTZ.js";import"./Close-CmzkMwAl.js";import"./IconButton-CKec_Uyq.js";import"./Paper-uUXWZxxA.js";import"./useTheme-rB-re95z.js";import"./useTheme-DvZKIZv1.js";import"./Stack-BtAiw5Y0.js";import"./extendSxProp-Cwsr4q6G.js";import"./getThemeProps-B95fEd_g.js";import"./Box-_4wb5t0A.js";import"./AlertTitle-CSTn9zmN.js";import"./Typography-BZ2PGk-H.js";import"./index-Cs3zhFJ7.js";import"./ClickAwayListener-BZeSBdqd.js";import"./getReactElementRef-Cdg41oby.js";import"./index-Bq1q-nPq.js";import"./index-FtV39xre.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BlrKM9H8.js";import"./Tooltip-BkszJ6A3.js";import"./index-D9wEq1Sm.js";import"./useControlled-ZqyZ1t-t.js";import"./Popper-CbJ95q-5.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-COlWpTTb.js";import"./QueryClientProvider-BxmwlV1f.js";import"./Link-C_j_NUNw.js";import"./Collapse-DE9QFK8z.js";import"./_baseUniq-BMjHlurh.js";import"./_Uint8Array-CdGkK4mZ.js";import"./isArray-q8ycs3ZN.js";import"./_getTag-DEVzP-z8.js";import"./isEqual-DetpVs-L.js";import"./merge-CXpHJeH_.js";import"./_initCloneObject-DmfTE17Q.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-6qfKi2r7.js";import"./inputBaseClasses-Bft2YqCg.js";import"./calculateFriendlyFileSize-Cg8Uh6Fg.js";import"./CheckCircleTwoTone-BAxuPcKP.js";import"./InfoTwoTone-CsWT3aqU.js";import"./useMutation-Dqmxrm1j.js";import"./dayjs.min-COljXBzg.js";import"./chunk-AYJ5UCUI-DRRGzA-U.js";import"./cloneDeep-B4VKzWqO.js";import"./Skeleton-C3BbJI2K.js";import"./SqlFunctions-zz0CCrj4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CrVVbGsQ.js";import"./Backdrop-DmM0Lj1C.js";import"./LinearProgress-ndxAFn_p.js";import"./index-VGRyIK3j.js";import"./index-jYGe6S6y.js";import"./index-BnR8I6Ui.js";import"./const-BP60AzNb.js";import"./index-BYiOiM8J.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
