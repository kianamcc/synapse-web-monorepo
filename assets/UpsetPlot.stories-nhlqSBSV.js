import{U as L}from"./UpsetPlot-cd463tzf.js";import{f as u}from"./index-BErcw5Us.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BUQylFOF.js";import"./DefaultPropsProvider-CmlrfWg5.js";import"./createTheme-D1p9A2f2.js";import"./index-gCH3F-r1.js";import"./iframe-BCBbcvZQ.js";import"./Button-Bq7-oNZP.js";import"./createSimplePaletteValueFilter-DTOtfgj3.js";import"./useTimeout-CivZ_id6.js";import"./ButtonBase-M4Jzxcu3.js";import"./useForkRef-COj3XvZQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bs51YMBW.js";import"./useFiles-B37VPWk-.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-Dg09IzDT.js";import"./OrientationBanner-B4SJkYZr.js";import"./index-C-H-fJuo.js";import"./spreadSx-CwcO6WA9.js";import"./react-UBZzhmRr.js";import"./FullWidthAlert-CHHjIkJD.js";import"./Alert-V5_UEojM.js";import"./useSlot-6pvzLYhW.js";import"./createSvgIcon-CkBZMxAq.js";import"./Close-CrlzALxw.js";import"./IconButton-DHSBqacV.js";import"./Paper-DqB8xjxS.js";import"./useTheme-clsDaoW6.js";import"./useTheme-B7m7fhXv.js";import"./Stack-C1IIaSPK.js";import"./extendSxProp-DQgbXvbc.js";import"./getThemeProps-CLdidU38.js";import"./Box-BuCUgXTH.js";import"./AlertTitle-2SRxYJwQ.js";import"./Typography-CkFk3qQH.js";import"./index-6OG8n7F8.js";import"./ClickAwayListener-2NJi44vQ.js";import"./getReactElementRef-DD0b2rBo.js";import"./index-CnzvKS9o.js";import"./index-CGgQNUb3.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-dmAf587E.js";import"./Tooltip-Bw5Mqcui.js";import"./index-DJUuUKdb.js";import"./useControlled-Cbe230fr.js";import"./Popper-CezA94Ov.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-peoRulMu.js";import"./QueryClientProvider-CEduwUw-.js";import"./Link-DTAwkCMx.js";import"./Collapse-DqM45Hd3.js";import"./_baseUniq-D0P6MV-g.js";import"./_Uint8Array-B9_5IaWw.js";import"./isArray-BNo8uFCA.js";import"./_getTag-XwRPoZO-.js";import"./isEqual-Bqh1nAyw.js";import"./merge-CkbrndtI.js";import"./_initCloneObject-KI0b2em9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-VXYSh2ya.js";import"./inputBaseClasses-CAubCajD.js";import"./calculateFriendlyFileSize-CQLA_QRj.js";import"./CheckCircleTwoTone-hy9tFN29.js";import"./InfoTwoTone-DIuNf5oo.js";import"./useMutation-DXPIwxqN.js";import"./dayjs.min-BsZF07Jg.js";import"./chunk-AYJ5UCUI-DKhRYle7.js";import"./cloneDeep-BDSqEaua.js";import"./Skeleton-B0T6iVLg.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Doy9QieS.js";import"./Backdrop-DI7B_xM2.js";import"./LinearProgress-CZFg3EDu.js";import"./index-Ddga6cWZ.js";import"./index-DZFf3RM-.js";import"./index-i7XRVB-R.js";import"./const-BP60AzNb.js";import"./index-vbJFCX_E.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
