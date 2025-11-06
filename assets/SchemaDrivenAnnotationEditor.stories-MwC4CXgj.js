import{jJ as T}from"./iframe-HeQVN1jZ.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DSp4b8e1.js";import"./index-r8ZA1smB.js";import"./useEntity-CdX0hCma.js";import"./pickBy-BzTD-lxq.js";import"./isString-BK7NEvo2.js";import"./_baseIteratee-BVM6Exab.js";import"./useQueries-v3Tbkcys.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-C6LumC3A.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CR3JdWIx.js";import"./useSchema-CdDU9Vdk.js";import"./index-DQzXaKwu.js";import"./enums-JwbAtxFF.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Be_D6xST.js";import"./uniq-DE7sbJg2.js";import"./forEach-B8iwwgef.js";import"./Grid-BVEDu4UK.js";import"./ListItem-DkPNn23b.js";import"./listItemButtonClasses-Cj90fr09.js";import"./ListItemIcon-C37V2JaR.js";import"./MenuItem-BgyGhhI7.js";import"./ListItemText-DU0bExNJ.js";import"./ArrowUpward-Dgy6Gf4E.js";import"./ContentCopy-CVHi5Fc6.js";import"./FormControlLabel-C9w-gagr.js";import"./Checkbox-Dtmrm5DB.js";import"./SwitchBase-zArA2Cyl.js";import"./FormGroup-Br1Fs8sm.js";import"./RadioGroup-VqRGQ4U5.js";import"./Radio-mTIG_Ea1.js";import"./Slider-D3xk7zVk.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DKwNuu_8.js";import"./DialogBase-DCgMnFnd.js";import"./Close-C0SGxNg2.js";import"./HelpPopover-_-ow38BJ.js";import"./MarkdownPopover-DCouyG3a.js";import"./LightTooltip-DzooIRNq.js";import"./MarkdownSynapse-Bxjue5NL.js";import"./SkeletonButton-BHe8ofYu.js";import"./SkeletonInlineBlock-BlMS0EJx.js";import"./SkeletonTable-CVLaQigb.js";import"./SkeletonParagraph-DAxVwEIJ.js";import"./JsonSchemaForm-iMzBBhO_.js";import"./GridLegacy-DsDByzDs.js";import"./HelpTwoTone-DLIuqZyd.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-B5ND7QzU.js";import"./_createAggregator-BggQMZxU.js";import"./_baseMap-Dbza7fMM.js";import"./DateTimePicker-dRqRXNng.js";import"./useMobilePicker-DGNPy-ay.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-eo8ONewA.js";import"./index-CJwnjHko.js";import"./Chip-Cdmctrnd.js";import"./Tabs-BNRMe9OY.js";import"./KeyboardArrowRight-BAulb08q.js";import"./Autocomplete-Bsa1FZIx.js";import"./usePreviousProps-BuJizDnj.js";import"./use-deep-compare-effect.esm-BqIlrlNY.js";import"./TextWidget-CasAHGxz.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
