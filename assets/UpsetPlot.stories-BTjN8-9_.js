import{U as L}from"./UpsetPlot-CtKvIzkQ.js";import{f as u}from"./index-Cod0S1A7.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DLthbIIA.js";import"./DefaultPropsProvider-mPFVMdGB.js";import"./createTheme-CkRYGQfv.js";import"./index-DaSlfKLF.js";import"./iframe-Dm8vgKnX.js";import"./Button-xJzgoxEY.js";import"./createSimplePaletteValueFilter-wbN65Nig.js";import"./useTimeout-QXUecAin.js";import"./ButtonBase-mZPr37pC.js";import"./useForkRef-BhBDeep6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BImVxgDT.js";import"./useFiles-CME91ToD.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-CVbzDXsD.js";import"./OrientationBanner-XtSc0VzO.js";import"./index-Dh9lJkbv.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAXrNgB9.js";import"./FullWidthAlert-w0gAjoe7.js";import"./Alert-D-FV5RBj.js";import"./useSlot-Ae7YRVHy.js";import"./createSvgIcon-Ch71LAIP.js";import"./Close-IrfRyJP-.js";import"./IconButton-Bf2A1uXg.js";import"./Paper-CqEiiRuS.js";import"./useTheme-BA-blKiO.js";import"./useTheme-B-aviv3-.js";import"./Stack-C4YvO7qs.js";import"./extendSxProp-CP7cc_Y-.js";import"./getThemeProps-DGBayQ_1.js";import"./Box-CurSA-NL.js";import"./AlertTitle-U8xGE2H7.js";import"./Typography-_YK6XuJ0.js";import"./index-DY-zIKMm.js";import"./ClickAwayListener-BW575h7f.js";import"./getReactElementRef-BBh2do7G.js";import"./index-Dg0dhTBH.js";import"./index-CHamsNV1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D940Xbuf.js";import"./Tooltip-Gix1FQC7.js";import"./index-rxRUtMJh.js";import"./useControlled-BSkLZwL5.js";import"./Popper-D4lQmrad.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-C8WcoIkJ.js";import"./QueryClientProvider-CglEAz9z.js";import"./Link-BibH5K7W.js";import"./Collapse-DrHkSXPK.js";import"./_baseUniq-cl2EXb8u.js";import"./_Uint8Array-C2PDKUpn.js";import"./isArray-BsWxdpED.js";import"./_getTag-BlpsDHUb.js";import"./isEqual-Bb3pCitX.js";import"./merge-Cj_xTLin.js";import"./_initCloneObject-DrqXo0fx.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-9s1ooV9G.js";import"./inputBaseClasses-I3CUYI4n.js";import"./calculateFriendlyFileSize-VdcSZY2R.js";import"./CheckCircleTwoTone-DuKDEC1n.js";import"./InfoTwoTone-D4CDQoZZ.js";import"./useMutation-BreGQyqG.js";import"./dayjs.min-Dl_96zRx.js";import"./chunk-AYJ5UCUI-CvPnyUnx.js";import"./cloneDeep-NQIqYrAv.js";import"./Skeleton-CLh09zTi.js";import"./SqlFunctions-B3tep9ZC.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dji5whlZ.js";import"./Backdrop-BTqyqvRU.js";import"./LinearProgress-Bp_uOx7B.js";import"./index-B9BPXOSn.js";import"./index-Dro1CezU.js";import"./index-BIo1AQxt.js";import"./const-BP60AzNb.js";import"./index-CpSFRTul.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
