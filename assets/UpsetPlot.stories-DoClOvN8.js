import{U as L}from"./UpsetPlot-C6YJeNVJ.js";import{f as u}from"./index-D55DqV64.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Cj0Wnu1r.js";import"./DefaultPropsProvider-D7V8rD5v.js";import"./createTheme-CfvkUd1Z.js";import"./index-h6wMStlP.js";import"./iframe-BIXzCf__.js";import"./Button-DmjkSNHc.js";import"./createSimplePaletteValueFilter-7MYa4cYr.js";import"./useTimeout-qJcADyon.js";import"./ButtonBase-0zocx7gF.js";import"./useForkRef-Bgjy7c5C.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DMvTAHSq.js";import"./useFiles-BbxVu2DR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DB1U6fCi.js";import"./OrientationBanner-CfcCHA7b.js";import"./index-D-JvkkFQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dvfkm1q8.js";import"./FullWidthAlert-C3__BrN1.js";import"./Alert-KbHye0zK.js";import"./useSlot-sOD4zP-r.js";import"./createSvgIcon-BBewBNub.js";import"./Close-vJBs_HBy.js";import"./IconButton-BIC_-n2r.js";import"./Paper-BxqOSPyk.js";import"./useTheme-Cw4Zp1rn.js";import"./useTheme-PSCU5VTp.js";import"./Stack-BlHkd8TU.js";import"./useThemeProps-B2dREZbs.js";import"./getThemeProps-C0RGq6ua.js";import"./extendSxProp-CkLeZJqn.js";import"./Box-Dx6_J6VB.js";import"./AlertTitle-fHQYxNHL.js";import"./Typography-TJTmaHAu.js";import"./index-DYWBYB4S.js";import"./ClickAwayListener-BfovIoNr.js";import"./getReactElementRef-Bwbpg52p.js";import"./index-U4jxIuWl.js";import"./index-t59vC1km.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-wP9co_-j.js";import"./Tooltip-n52PzXnL.js";import"./index-ByPvK6j8.js";import"./useControlled-OG_H38db.js";import"./Popper-BhKXntQR.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-CmubrUzL.js";import"./QueryClientProvider-DEQ_VpcF.js";import"./Link-Kv9iFQ5W.js";import"./Collapse-Q1KoyyE_.js";import"./_baseUniq-aE6oP3PL.js";import"./_Uint8Array-BGr3SjUR.js";import"./isArray-Cn9BbLfk.js";import"./_getTag-1ZzLjjIk.js";import"./isEqual-DeX1HjXm.js";import"./noop-DX6rZLP_.js";import"./merge-JRhW7aR_.js";import"./_initCloneObject-BuVlxAmo.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHQD_AfM.js";import"./inputBaseClasses-DhSIyHr7.js";import"./calculateFriendlyFileSize-D9gQBnSg.js";import"./CheckCircleTwoTone-Cmw_kNue.js";import"./InfoTwoTone-14otHSKQ.js";import"./useMutation-AlPt0G_3.js";import"./dayjs.min-Bh9Qzvrd.js";import"./chunk-AYJ5UCUI-C8HEU9Sm.js";import"./cloneDeep-B0NF6IcV.js";import"./Skeleton-CNu0JRel.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BzEpietQ.js";import"./Backdrop-SCW-muxj.js";import"./LinearProgress-CTLDtvyA.js";import"./index-B5P1NSP3.js";import"./index-C6Fg_VYq.js";import"./index-oc7nHxOU.js";import"./const-BP60AzNb.js";import"./index-_bUv0LW7.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
