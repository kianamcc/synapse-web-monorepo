import{jJ as p}from"./iframe-CAB19BbH.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DkyMK_7K.js";import"./index-Chi_LkuB.js";import"./useEntity-DsUywSWh.js";import"./pickBy-HFHTVGSn.js";import"./isString-3-8O04Ge.js";import"./_baseIteratee-BDojqQeK.js";import"./useQueries-ChXbUcWa.js";import"./useSuspenseQuery-zF1b63rt.js";import"./useInfiniteQuery-CE_gTuUj.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-wB7wN9UO.js";import"./useSchema-wNm1wqmu.js";import"./index-EQn-e-rB.js";import"./enums-D5yPnPot.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DkPOUSOa.js";import"./uniq-tAg4_KIk.js";import"./forEach-CWOCpBhE.js";import"./Add-DJ4pQD5R.js";import"./Grid-CjslGWPv.js";import"./ListItem-CQX01yF6.js";import"./listItemButtonClasses-CTjDkrXb.js";import"./ListItemIcon-BJdu2WRW.js";import"./MenuItem-CF0OPkSJ.js";import"./ListItemText-0EDHEgM-.js";import"./ArrowUpward-C-wUyNfW.js";import"./ContentCopy-CmoVdoIv.js";import"./FormControlLabel-D9uxq7_c.js";import"./Checkbox-CNIkB2C5.js";import"./SwitchBase-DcWVvmI0.js";import"./FormGroup-BUzeacAz.js";import"./RadioGroup-DWolkCZE.js";import"./Radio-XJeZwwBi.js";import"./Slider-Dfr88dsL.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-M8D-sUFp.js";import"./DialogBase-Bewb0Whx.js";import"./Close-CYApig56.js";import"./HelpPopover-BWiIPGwh.js";import"./MarkdownPopover-DcK6NE8b.js";import"./LightTooltip-C9PyqNfw.js";import"./MarkdownSynapse-C75K0Q9-.js";import"./SkeletonButton-Ap83qpg-.js";import"./SkeletonInlineBlock-DsyBz5jn.js";import"./SkeletonTable-B83AcFFC.js";import"./SkeletonParagraph-Chcpv0Ew.js";import"./JsonSchemaForm-DKJhyrqi.js";import"./GridLegacy-BgtRQdeA.js";import"./HelpTwoTone-BChxG93u.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BM9mjQoJ.js";import"./_createAggregator-CSPaUL-3.js";import"./_baseMap-CnNy9Vcy.js";import"./DateTimePicker-fl3MfXT_.js";import"./useMobilePicker-3opO0tJv.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CUpti3qp.js";import"./index-4rOGAnCi.js";import"./Chip-DBDLRQBv.js";import"./Tabs-pYQbtiPq.js";import"./KeyboardArrowRight-D4NYSPhT.js";import"./Autocomplete-D7Y3PTqD.js";import"./usePreviousProps-sgIDkhqQ.js";import"./use-deep-compare-effect.esm-CJphMZrM.js";import"./TextWidget-DdnIf2G7.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
