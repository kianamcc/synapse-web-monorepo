import{U as L}from"./UpsetPlot-DMsoqczL.js";import{f as u}from"./index-B5-4P_UU.js";import"./jsx-runtime-DCJQF7Yu.js";import"./index-D7QECZ8_.js";import"./iframe-CuhiliFp.js";import"./LargeButton-ChgckYUw.js";import"./DefaultPropsProvider-45DiC2R-.js";import"./createTheme-CuV6lKby.js";import"./Button-C36btVIf.js";import"./ButtonBase-BWYPhWny.js";import"./useTimeout-JjV9Y7kR.js";import"./TransitionGroupContext-B5JkxjR-.js";import"./useForkRef-DvumXbvd.js";import"./useIsFocusVisible-DI4OcUBX.js";import"./useEventCallback-hxJDok40.js";import"./useFiles-BOqix5tm.js";import"./VerificationSubmission-DsgC4t7y.js";import"./SynapseConstants-CdFknnGS.js";import"./OrientationBanner-CC-lZdxv.js";import"./index-D2Bvq6Nc.js";import"./spreadSx-CwcO6WA9.js";import"./react-BJjff2Hm.js";import"./FullWidthAlert-Bj3lD5jg.js";import"./Alert-BsdT6A5s.js";import"./resolveComponentProps-DWeRc3dZ.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-B4UMNYvL.js";import"./Close-BXsOQpdh.js";import"./IconButton-Ctyxkzex.js";import"./Paper-DxoJKm8a.js";import"./Stack-B0cdQae2.js";import"./getThemeProps-BSmwECat.js";import"./useTheme-Dt6xohqk.js";import"./Box-CUPEk2R8.js";import"./AlertTitle-Du67j12O.js";import"./Typography-CgQwt_4v.js";import"./useTheme-yUrwrjvB.js";import"./Grow-BeOr-5JA.js";import"./index-DSi42yUw.js";import"./utils-DeDVuNU5.js";import"./ClickAwayListener-BC8tckZ8.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DVh9M4NB.js";import"./index-vTdvcokP.js";import"./useControlled-Ct4_TlDh.js";import"./useId-vdcc40Zz.js";import"./Popper-kEzLQScP.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-nV6OcPaD.js";import"./utils-Cttwrnae.js";import"./Link-ZjbhCfZ0.js";import"./Collapse-BLIS97ot.js";import"./isNil-Dnq5PGVr.js";import"./_Uint8Array-DOpCseV4.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CFFu1MVA.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-B2Du7X7-.js";import"./_getTag-DRr85OGv.js";import"./tinycolor-Begke6kS.js";import"./Fade-CnF8Do1c.js";import"./Skeleton-B5ZmudJe.js";import"./inputBaseClasses-CGTgXlAI.js";import"./calculateFriendlyFileSize-DHuViXKC.js";import"./CheckCircleTwoTone-Cc67pUZK.js";import"./InfoTwoTone-CzFGxlsS.js";import"./mutation-Dx45ojvb.js";import"./dayjs.min-DxbNjoSh.js";import"./chunk-AYJ5UCUI-Npvsl4CZ.js";import"./cloneDeep-B0BmWEKv.js";import"./_initCloneObject-C8LZoPvu.js";import"./isEqual-BkipORyh.js";import"./merge-vnkNN72-.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-C1gwNAz5.js";import"./react-sizeme-CQT84Nmi.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CjP0OZue.js";import"./Backdrop-Dv63Vw8n.js";import"./LinearProgress-C-V49UFU.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
