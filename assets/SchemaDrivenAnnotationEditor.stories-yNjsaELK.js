import{jG as p}from"./iframe-CekoipMQ.js";import{S as a}from"./SchemaDrivenAnnotationEditor-KfBzJUhk.js";import"./index-Chi_LkuB.js";import"./useEntity-DQgi30ji.js";import"./pickBy-Ww-tQVEU.js";import"./isString-DBP9I2AU.js";import"./_baseIteratee-BXlC1cTA.js";import"./useQueries-C_Zy-8PY.js";import"./useSuspenseQuery-Bo7ICQPt.js";import"./useInfiniteQuery-CLkXZ8rI.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DJ8fFRPc.js";import"./useSchema-CjC3Df60.js";import"./index-6PeG5eMD.js";import"./enums-CgQi3N-Z.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BC60SyG-.js";import"./uniq-D3mA5g3i.js";import"./forEach-CWOCpBhE.js";import"./Add-Bp0ecdnJ.js";import"./Grid-D3lpu0NY.js";import"./ListItem-qW2y4pi_.js";import"./listItemButtonClasses-DS1x6z0O.js";import"./ListItemIcon-CeEWBSB_.js";import"./MenuItem-RwAbQprV.js";import"./ListItemText-wYrYifu4.js";import"./ArrowUpward-Dxm7SWGm.js";import"./ContentCopy-DBNjoe7T.js";import"./FormControlLabel-DIv_L68F.js";import"./Checkbox-C1LBy7wi.js";import"./SwitchBase-CHYvM6e8.js";import"./FormGroup-fPscHGC8.js";import"./RadioGroup-XhSF_Uv5.js";import"./Radio-DAfi7xeO.js";import"./Slider-CMnZ4HPJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-nWrWU4Hp.js";import"./DialogBase-ehDwX6xB.js";import"./Close-DeFS_KGN.js";import"./HelpPopover-BpHylRT-.js";import"./MarkdownPopover-DIRfGSkQ.js";import"./LightTooltip-i2mHHM7n.js";import"./MarkdownSynapse-CORj4GTu.js";import"./SkeletonButton-DjK3K6zG.js";import"./SkeletonInlineBlock-C1cA1eyz.js";import"./SkeletonTable-BgJD-A8R.js";import"./SkeletonParagraph-9U18_kZ7.js";import"./JsonSchemaForm-C-NRTUSJ.js";import"./GridLegacy-Wd1tOgGz.js";import"./HelpTwoTone-CUlkJxw8.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CcL8eZLu.js";import"./_createAggregator-Bz2EYJ92.js";import"./_baseMap-BtVzMATu.js";import"./DateTimePicker-Bsav0Ue7.js";import"./useMobilePicker-DLN-0oLI.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-COZhjb7u.js";import"./index-CItDcaQT.js";import"./Chip-Dup-72Fi.js";import"./Tabs-DBMVUJHc.js";import"./KeyboardArrowRight-BmusjaMW.js";import"./Autocomplete-D85gN5IA.js";import"./usePreviousProps-BCYaUye4.js";import"./use-deep-compare-effect.esm-iBoQXTvh.js";import"./TextWidget-t4sRtpq_.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
