import{U as L}from"./UpsetPlot-BG5cYibN.js";import{f as u}from"./index-DZivtt-K.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-9_Zyrqx8.js";import"./DefaultPropsProvider-CmhSSicv.js";import"./createTheme-aM5VLUiz.js";import"./index-DTK8yXiD.js";import"./iframe-CvYaoHVj.js";import"./Button-CB4uDwHM.js";import"./createSimplePaletteValueFilter-Com0BGVT.js";import"./useTimeout-BkRL3IIv.js";import"./ButtonBase-UL8vgMVX.js";import"./useForkRef-B8MjIxnS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BVH9aY3T.js";import"./useFiles-CtjU0UZ7.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-HbkKhgzl.js";import"./OrientationBanner-CshYfrww.js";import"./index-01OgG1qB.js";import"./spreadSx-CwcO6WA9.js";import"./react-DH66hlil.js";import"./FullWidthAlert-ZQjOoxm3.js";import"./Alert-BYp2EJZI.js";import"./useSlot-C8BVnOP5.js";import"./createSvgIcon-DkqjO5wZ.js";import"./Close-CELpiYcp.js";import"./IconButton-CC_uewQy.js";import"./Paper-OFH_KjEE.js";import"./useTheme-Dqm1pUhK.js";import"./useTheme-U-RwML_u.js";import"./Stack-Cci7O7ML.js";import"./extendSxProp-lZk6lgIG.js";import"./getThemeProps-BgL4ceoy.js";import"./Box-DcMM8zLt.js";import"./AlertTitle-BY19Ps-v.js";import"./Typography-D1NZrSF7.js";import"./index-8SIWIhuK.js";import"./ClickAwayListener-D1X95kKj.js";import"./getReactElementRef-DTlu16VU.js";import"./index-4R7E1JGW.js";import"./index-Bx6bc031.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CbpX2AED.js";import"./Tooltip-Dj8QUNkD.js";import"./index-B76dTo4r.js";import"./useControlled-B5ZzhVG3.js";import"./Popper-CAW1LZuT.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-ZU2je9FH.js";import"./QueryClientProvider-DMzdf9tA.js";import"./Link-BwFUk3Oj.js";import"./Collapse-CkCee2Jw.js";import"./_baseUniq-0u_Y41qn.js";import"./_Uint8Array-CuoJTB6Q.js";import"./isArray-DY9Ezigh.js";import"./_getTag-CBA9pD0g.js";import"./isEqual-DdqtLaCO.js";import"./merge-DxffwPAM.js";import"./_initCloneObject-BFyHq_Yd.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-eve2HPw4.js";import"./inputBaseClasses-BFPy7elr.js";import"./calculateFriendlyFileSize-DuMKA-3z.js";import"./CheckCircleTwoTone-BJe0-l4L.js";import"./InfoTwoTone-o1Sk_S6o.js";import"./useMutation-DmalvCqZ.js";import"./dayjs.min-DZEyTAO2.js";import"./chunk-AYJ5UCUI-B3tBNz5t.js";import"./cloneDeep-DeYm0Lvx.js";import"./Skeleton-BUCObm11.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D3dkNCD5.js";import"./Backdrop-adLODngZ.js";import"./LinearProgress-CY-o3-nv.js";import"./index-BFhOJVeI.js";import"./index-CFWteIZI.js";import"./index-C3of7Tl2.js";import"./const-BP60AzNb.js";import"./index-CY4a4Dao.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
