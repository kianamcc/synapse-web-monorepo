import{U as L}from"./UpsetPlot-12R3vSDr.js";import{f as u}from"./index-jRneCmdE.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DisAqBMo.js";import"./DefaultPropsProvider-dQjI1z2Q.js";import"./createTheme-BtKsFDJb.js";import"./index-DgWzafQX.js";import"./iframe-DYYJI8IR.js";import"./Button-BOnfz6gg.js";import"./createSimplePaletteValueFilter-Ba6BSjt1.js";import"./useTimeout-KbnpBUav.js";import"./ButtonBase-BV_Svz33.js";import"./useForkRef-CGFekAbF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DPoJlQv3.js";import"./useFiles-C-i-TLaj.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-yTPP4ibJ.js";import"./OrientationBanner-NrJ6x3Um.js";import"./index-CDfw4ibi.js";import"./spreadSx-CwcO6WA9.js";import"./react-iznkqUdM.js";import"./FullWidthAlert-BQHSiNTn.js";import"./Alert-HaV25ohz.js";import"./useSlot-DbqTD4GH.js";import"./createSvgIcon-BUeMPEos.js";import"./Close-UaYlRgay.js";import"./IconButton-COMh1wHt.js";import"./Paper-DRUFVFuo.js";import"./useTheme-DexxAIst.js";import"./useTheme-BsTX5Njf.js";import"./Stack-Bl6utGYW.js";import"./extendSxProp-BXLCqC37.js";import"./getThemeProps-CvDTyZg4.js";import"./Box-Cdu-p-p4.js";import"./AlertTitle-CdvYF1_e.js";import"./Typography-B14dxalQ.js";import"./index-C3kEk841.js";import"./ClickAwayListener-wW66lH_8.js";import"./getReactElementRef-Y7YbnsRM.js";import"./index-WIAOxyN4.js";import"./index-xnuC7E17.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DQ1fqbs3.js";import"./Tooltip-BHNuZilH.js";import"./index-LvNsMawH.js";import"./useControlled-D8oIXpId.js";import"./Popper-D_-SBC88.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-ClCjMDWJ.js";import"./QueryClientProvider-CRpEytM8.js";import"./Link-CsVZIIuu.js";import"./Collapse-y9LqLB1R.js";import"./_baseUniq-B0QZMQbs.js";import"./_Uint8Array-DDn9cgNP.js";import"./isArray-BGIATQGG.js";import"./_getTag-CLNtpywB.js";import"./isEqual-C6OErc_G.js";import"./merge-D1h1ZS53.js";import"./_initCloneObject-zYU2LTGg.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-KgKZEq5O.js";import"./inputBaseClasses-BgY73dJx.js";import"./calculateFriendlyFileSize-BkLSPg13.js";import"./CheckCircleTwoTone-C-4wcfQx.js";import"./InfoTwoTone-Dh3NE58z.js";import"./useMutation-CLEhG4KT.js";import"./dayjs.min-Entwoms8.js";import"./chunk-AYJ5UCUI-DhVmQ0rH.js";import"./cloneDeep-D2GQBrr3.js";import"./Skeleton-CxQjpvSA.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BbMxK2e7.js";import"./Backdrop-u0_giWTP.js";import"./LinearProgress-BBkKVA-A.js";import"./index-Bct9s-cu.js";import"./index-Bi59FqQf.js";import"./index-6lO_gc4B.js";import"./const-BP60AzNb.js";import"./index-DFhwg5_F.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
