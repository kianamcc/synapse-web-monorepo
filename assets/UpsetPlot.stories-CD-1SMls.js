import{U as L}from"./UpsetPlot-C61Xqn6g.js";import{f as u}from"./index-eEY3TMTC.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DmOKli9O.js";import"./DefaultPropsProvider-C35g19ng.js";import"./createTheme-DWPhXL4x.js";import"./index-DaerQfh4.js";import"./iframe-DG_0Yb8T.js";import"./Button-Bpa-g8Di.js";import"./createSimplePaletteValueFilter-BR2dnVNl.js";import"./useTimeout-BtgfChTQ.js";import"./ButtonBase-D7gcgVwq.js";import"./useForkRef-chIAXqkx.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DfPFzaPe.js";import"./useFiles-Cdf4OXNb.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DTXCsRte.js";import"./OrientationBanner-hmqvqVcA.js";import"./index-k28OdJd_.js";import"./spreadSx-CwcO6WA9.js";import"./react-BPyDxb9J.js";import"./FullWidthAlert-B6jmRxZQ.js";import"./Alert-BsCcOhzf.js";import"./useSlot-8fqGYfNr.js";import"./createSvgIcon-B1ET5Q7C.js";import"./Close-D2OLTMfD.js";import"./IconButton-CbX8V5dQ.js";import"./Paper-DXnLpHDO.js";import"./useTheme-1eWS1mKW.js";import"./useTheme-Bq26F_mY.js";import"./Stack-BkbQO6V6.js";import"./extendSxProp-DtCxMq59.js";import"./getThemeProps-Zq_eg-hT.js";import"./Box-DSkGfUnd.js";import"./AlertTitle-DRG2k-rr.js";import"./Typography-DvSiE9Go.js";import"./index--HKoRW_u.js";import"./ClickAwayListener-BH5tDWrA.js";import"./getReactElementRef-O4bMEre0.js";import"./index-BkAjmFmp.js";import"./index-BZI1VTjl.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DbLtzD-y.js";import"./Tooltip-XZsCFdUo.js";import"./index-Bsstuy1M.js";import"./useControlled-BuXgd8DV.js";import"./Popper-CHXNkUvh.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-ClYx7PY0.js";import"./QueryClientProvider-DfDvTi6i.js";import"./Link-DeIftJYl.js";import"./Collapse-haI7VO-h.js";import"./_baseUniq-_rjqw195.js";import"./_Uint8Array-CEHNoL2Q.js";import"./isArray-B1bqcE2k.js";import"./_getTag-DaUo7_x6.js";import"./isEqual-B3juUSlg.js";import"./merge-pDiXBsNx.js";import"./_initCloneObject-C6PVUiwE.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Pl-VaJW2.js";import"./inputBaseClasses-DqHUenJQ.js";import"./calculateFriendlyFileSize-B7_ak3iA.js";import"./CheckCircleTwoTone-CpNxRNCX.js";import"./InfoTwoTone-CPdeaf2r.js";import"./useMutation-CE3Gz46T.js";import"./dayjs.min-BcIEVL5P.js";import"./chunk-AYJ5UCUI-C6leyoDe.js";import"./cloneDeep-CXxSt_nH.js";import"./Skeleton-DBKkui2n.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CI5HU51-.js";import"./Backdrop-CRfj72Xl.js";import"./LinearProgress-DJwAU71f.js";import"./index-cJLZncG7.js";import"./index-DDF_kVwM.js";import"./index-CpLu9oPL.js";import"./const-BP60AzNb.js";import"./index-9Ge53aGH.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
