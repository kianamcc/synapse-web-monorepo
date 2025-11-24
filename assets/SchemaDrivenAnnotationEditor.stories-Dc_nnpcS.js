import{jK as T}from"./iframe-BXWMp6Ce.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CMuV1xEU.js";import"./index-r8ZA1smB.js";import"./useEntity-D-mnOD8c.js";import"./pickBy-C_JdhcyJ.js";import"./isString-iCM9BWBq.js";import"./_baseIteratee-9dv7RfxS.js";import"./useQueries-DqcM-HR_.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CyFXXCnn.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DD6px5w_.js";import"./useSchema-DH4bwYHj.js";import"./index-DToqDzaY.js";import"./enums-BFBHCiCF.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BVzTx-E1.js";import"./uniq-D5B3zGmk.js";import"./forEach-B8iwwgef.js";import"./Grid-DFJawvhd.js";import"./ListItem-DDt-ikTI.js";import"./listItemButtonClasses-CvzwIQ6E.js";import"./ListItemIcon-CDWqL8IM.js";import"./MenuItem-CaHzOUpM.js";import"./ListItemText-B1yJcY9W.js";import"./ArrowUpward-BTDJ91t7.js";import"./ContentCopy-BAmt_Akm.js";import"./FormControlLabel-Jukgt1aX.js";import"./Checkbox-BhF27RVr.js";import"./SwitchBase-bVvO_LRY.js";import"./FormGroup-DWDmQdE6.js";import"./RadioGroup-BTZuuphD.js";import"./Radio-Bni7GtxK.js";import"./Slider-BECXnQEs.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-B4c7aCoP.js";import"./DialogBase-Bpmkqx5q.js";import"./Close-3lD1GSjC.js";import"./HelpPopover-Mk5t2Cbj.js";import"./MarkdownPopover-DupBwi5m.js";import"./LightTooltip-BWeLAStW.js";import"./MarkdownSynapse-BHs5qIjd.js";import"./SkeletonButton-D-O8A1CK.js";import"./SkeletonInlineBlock-B2BP_SJl.js";import"./SkeletonTable-fAq5iwau.js";import"./SkeletonParagraph-BJcHUZ4o.js";import"./JsonSchemaForm-BW2l4mnj.js";import"./GridLegacy-CM0PT94L.js";import"./HelpTwoTone-BGtoii0S.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CkYWufxH.js";import"./_createAggregator-DdlbAIY4.js";import"./_baseMap-D34HiNXT.js";import"./DateTimePicker-bKMLfx3V.js";import"./useMobilePicker-DZwffTce.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-D4iivccc.js";import"./index-CfxawqaX.js";import"./Chip-r_XzcIen.js";import"./Tabs-DuHTxxsX.js";import"./KeyboardArrowRight-Dkzvu_a6.js";import"./Autocomplete-C05-3oGI.js";import"./usePreviousProps-B-UJLYUC.js";import"./use-deep-compare-effect.esm-5It3HpKk.js";import"./TextWidget-LE_226-K.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
