import{jJ as T}from"./iframe-BrPoS5FB.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CuJC9PQD.js";import"./index-r8ZA1smB.js";import"./useEntity-BY2eC-gV.js";import"./pickBy-Bn-Uz9RE.js";import"./isString-BsQ6DP0w.js";import"./_baseIteratee-CvXiprSM.js";import"./useQueries-QoUoMS77.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Wta0toVI.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B_VZ6xLf.js";import"./useSchema-CurrPw2e.js";import"./index-BAmR-K8n.js";import"./enums-B5RIP5hg.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C6u6dmNB.js";import"./uniq-Dpgqo0aV.js";import"./forEach-B8iwwgef.js";import"./Grid-CDuVaWcE.js";import"./ListItem-B6_MLfs4.js";import"./listItemButtonClasses-Dh5Ggp-k.js";import"./ListItemIcon-D7MCZbNC.js";import"./MenuItem-BrM7IBWv.js";import"./ListItemText-BrE7hqGq.js";import"./ArrowUpward-aryVxVqU.js";import"./ContentCopy-Crk0XVTt.js";import"./FormControlLabel-y0w6AE6J.js";import"./Checkbox-BvD29YM_.js";import"./SwitchBase-CMKAbFTe.js";import"./FormGroup-DTZuaAj9.js";import"./RadioGroup-T32YVtXQ.js";import"./Radio-B3ZeirML.js";import"./Slider-DwDP5sgG.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Bgh6yuP1.js";import"./DialogBase-BJrucS8y.js";import"./Close-CvEU7XhU.js";import"./HelpPopover-CWV6J_Zt.js";import"./MarkdownPopover-xwCpjde8.js";import"./LightTooltip-BkLp4ozd.js";import"./MarkdownSynapse-OD1xjODX.js";import"./SkeletonButton-2N5ZG66q.js";import"./SkeletonInlineBlock-CU1JeY6s.js";import"./SkeletonTable-7Ts_fDyw.js";import"./SkeletonParagraph-BRiZwInB.js";import"./JsonSchemaForm-BsxKTnWU.js";import"./GridLegacy-Bm04NSmC.js";import"./HelpTwoTone-Du2GfLxR.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-B5FoRQae.js";import"./_createAggregator-WwY_axAV.js";import"./_baseMap-DYpYkmQM.js";import"./DateTimePicker-BtR9d8kv.js";import"./useMobilePicker-BlFZKDN1.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CU_VI_qx.js";import"./index-DvTUvNEA.js";import"./Chip-ZRMOIwtV.js";import"./Tabs-Bp2ZgEh8.js";import"./KeyboardArrowRight-CeyzCze-.js";import"./Autocomplete-BeHksJmL.js";import"./usePreviousProps-nPDIRt5s.js";import"./use-deep-compare-effect.esm-DwC_8CZ3.js";import"./TextWidget-D2TFluNt.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
