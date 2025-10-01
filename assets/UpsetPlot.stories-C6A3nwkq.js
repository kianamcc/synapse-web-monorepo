import{U as L}from"./UpsetPlot-Ca04GF_b.js";import{f as u}from"./index-DnVSk_ri.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DwsGY-GW.js";import"./DefaultPropsProvider-CGqxt6ob.js";import"./createTheme-DcsDOw1A.js";import"./index-CkFnR4ru.js";import"./iframe-CKvnnJhq.js";import"./Button-BdFuUL1S.js";import"./createSimplePaletteValueFilter-B9aGn8G9.js";import"./useTimeout-BqUVErKz.js";import"./ButtonBase-CGWLsOy4.js";import"./useForkRef-BJQkitpf.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DK0_NXfb.js";import"./useFiles-BohibOw-.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-a2f1ATGs.js";import"./OrientationBanner-dBolsJnn.js";import"./index-DVi4Wje5.js";import"./spreadSx-CwcO6WA9.js";import"./react-A7vIHcfb.js";import"./FullWidthAlert-BEFsW73f.js";import"./Alert-DDc39lQe.js";import"./useSlot-Bju1dyXB.js";import"./createSvgIcon-364Lzn_b.js";import"./Close-LykhWtmH.js";import"./IconButton-CsuOJx-T.js";import"./Paper-Bxri_9-b.js";import"./useTheme-bpf5HOw7.js";import"./useTheme-VJ2j0frp.js";import"./Stack-Br4KC0Ob.js";import"./extendSxProp-B2jDyka1.js";import"./getThemeProps-CmXJJfNS.js";import"./Box-CDBIpvwF.js";import"./AlertTitle-5zvJDzzp.js";import"./Typography-DUXOvTJX.js";import"./index-BDhwziWJ.js";import"./ClickAwayListener-BpdWOejG.js";import"./getReactElementRef-JptPm9gh.js";import"./index-BqxOl3YS.js";import"./index-BPjGFZ8d.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DqmkwxJ5.js";import"./Tooltip-DC2q4Wz4.js";import"./index-CHLvizmL.js";import"./useControlled-BvqV3f_O.js";import"./Popper-cjOWIAbd.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BfSgOaRc.js";import"./QueryClientProvider-zm0Ye9sy.js";import"./Link-vbf7MeOq.js";import"./Collapse-BQIg35cI.js";import"./_baseUniq-DU7r3f6n.js";import"./_Uint8Array-B8U-SItt.js";import"./isArray-C533p3iE.js";import"./_getTag-DiNzJEZe.js";import"./isEqual-B0Qaz4yZ.js";import"./merge-fz5rfo0a.js";import"./_initCloneObject-hL9_bpDH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DvSChFD7.js";import"./inputBaseClasses-DP9QiBNX.js";import"./calculateFriendlyFileSize-Bf2PELXV.js";import"./CheckCircleTwoTone-DasE1-rH.js";import"./InfoTwoTone-BlO9HkXx.js";import"./useMutation-S7okSP_K.js";import"./dayjs.min-DWt_l-v8.js";import"./chunk-AYJ5UCUI-C6uHKJSQ.js";import"./cloneDeep-CrgHvOoP.js";import"./Skeleton-21P9iDr7.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-By0HdxlV.js";import"./Backdrop-DovbNK1-.js";import"./LinearProgress-BWi576zp.js";import"./index-CkL2_rLW.js";import"./index-COxjSHCd.js";import"./index-Hy90RJDp.js";import"./const-BP60AzNb.js";import"./index-__oe5k_n.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
