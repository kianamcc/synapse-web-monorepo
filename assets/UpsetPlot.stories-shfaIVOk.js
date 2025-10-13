import{U as L}from"./UpsetPlot-CMWhRd0u.js";import{f as u}from"./index-DpLyIa07.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Cd9M0FMv.js";import"./DefaultPropsProvider-BnvpeM39.js";import"./createTheme-CX2Fjxji.js";import"./index-BlqYlNqH.js";import"./iframe-DCM7iHZO.js";import"./Button-B5V1-M1A.js";import"./createSimplePaletteValueFilter-p4K6Mnoc.js";import"./useTimeout-DNpXQZXA.js";import"./ButtonBase-Dr_L7g0l.js";import"./useForkRef-CuaJz7-Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B_PETcC2.js";import"./useFiles-BxW2OjF_.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CbS11lwu.js";import"./OrientationBanner-DAAziPr7.js";import"./index-CjpbMb-2.js";import"./spreadSx-CwcO6WA9.js";import"./react-CEAJSkGg.js";import"./FullWidthAlert-CAFxwpcN.js";import"./Alert-D6R0aZpH.js";import"./useSlot-BGFFn2Yp.js";import"./createSvgIcon-DUQWWt-z.js";import"./Close-n0ge04QY.js";import"./IconButton-BIB-CAZ9.js";import"./Paper-CF2lzpio.js";import"./useTheme-BpONhpPf.js";import"./useTheme-B9tfsfzJ.js";import"./Stack-CnakP1Nf.js";import"./useThemeProps-wm4aMtJv.js";import"./getThemeProps-C7E0PQ7U.js";import"./extendSxProp-ClQEqrR8.js";import"./Box-BAunhwEm.js";import"./AlertTitle-C78MxdqV.js";import"./Typography-BGL1ewSU.js";import"./index-BBXrvSSK.js";import"./ClickAwayListener-wANS1sm5.js";import"./getReactElementRef-B-FQDB6t.js";import"./index-Dr007Q5D.js";import"./index-qpPU8qdy.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BeiywY4t.js";import"./Tooltip-BLdHd-MN.js";import"./index-WIo8OHGx.js";import"./useControlled-DNjUBqvl.js";import"./Popper-BLn1Ov7-.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BNpHjXkF.js";import"./QueryClientProvider-NhrOwhBC.js";import"./Link-DlixphRW.js";import"./Collapse-Dln0G3S5.js";import"./_baseUniq-pMV98HDI.js";import"./_Uint8Array-BbI8ilIQ.js";import"./isArray-Cc9w60IV.js";import"./_getTag-BSojBbQx.js";import"./isEqual-CkmIEn_k.js";import"./noop-DX6rZLP_.js";import"./merge-DlUKwuU8.js";import"./_initCloneObject-DwB7xy4-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DXKqJCZP.js";import"./inputBaseClasses-DJY9IRAF.js";import"./calculateFriendlyFileSize-BZdSz9n-.js";import"./CheckCircleTwoTone-DJ65aMmV.js";import"./InfoTwoTone-C3Zlortc.js";import"./useMutation-CV3ESuZm.js";import"./dayjs.min-81jMEWHJ.js";import"./chunk-AYJ5UCUI-B4cY1IOw.js";import"./cloneDeep-BYvILRz3.js";import"./Skeleton-B7QyB6bJ.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cs3usnJ9.js";import"./Backdrop-DXmD26bu.js";import"./LinearProgress-CaJVvjNy.js";import"./index-gdJ8L6_M.js";import"./index-Bsch6Aju.js";import"./index-4EQY-Dug.js";import"./const-BP60AzNb.js";import"./index-CFDVrMf-.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
