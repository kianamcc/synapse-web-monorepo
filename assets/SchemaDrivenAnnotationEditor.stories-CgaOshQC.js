import{jw as p}from"./iframe--4PIu_qy.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BQaub0ZR.js";import"./index-Chi_LkuB.js";import"./useEntity-D_kREN9m.js";import"./pickBy-C1osi4Ck.js";import"./isString-CD5owZVJ.js";import"./_baseIteratee-SIQo37mB.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BFK5ZSa-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BHtkgNE4.js";import"./useSchema-C6WW-Il7.js";import"./index-morCDsCN.js";import"./enums-Dm2Ak_pB.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BxD8QyVu.js";import"./uniq-AU-0-k6V.js";import"./forEach-UWyboym_.js";import"./Add-y7XE3xDq.js";import"./Grid--R8W3G5l.js";import"./ListItem-BVZVck8C.js";import"./listItemButtonClasses-MSv5oEqJ.js";import"./ListItemIcon-QaKApRrY.js";import"./MenuItem-B5CZnWag.js";import"./ListItemText-9A-wd6jp.js";import"./ArrowUpward-DvDW7_ZW.js";import"./ContentCopy-BWGCLNUY.js";import"./FormControlLabel-C7P4GXE_.js";import"./Checkbox-M-8y5vkU.js";import"./SwitchBase-dr8cwp_f.js";import"./FormGroup-BjKs3M2W.js";import"./RadioGroup-RXFo-LWO.js";import"./Radio-DWXvjAoO.js";import"./Slider-mK2srZFa.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-hlwM9UyB.js";import"./DialogBase-KOdTuKY_.js";import"./Close-Cka8SdIA.js";import"./HelpPopover-CDKz_QnM.js";import"./MarkdownPopover-CN870fqO.js";import"./LightTooltip-CM_IaFmM.js";import"./MarkdownSynapse-g98YneNH.js";import"./SkeletonButton-CbJBGnT-.js";import"./SkeletonInlineBlock-FN6COppS.js";import"./SkeletonTable-6mGZvVCs.js";import"./SkeletonParagraph-DjKVaY8f.js";import"./JsonSchemaForm-P5Y_QsM6.js";import"./GridLegacy-DlRYFgC7.js";import"./HelpTwoTone-Dp7y7g2E.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BwqOukAB.js";import"./_createAggregator-DZC-589T.js";import"./_baseMap-g_gQXiqC.js";import"./DateTimePicker-bi6Kq-CH.js";import"./useMobilePicker-83bersGQ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Cq-feqAp.js";import"./index-CSX6v4C9.js";import"./Chip-DEb3tB_0.js";import"./Tabs-_kykrth6.js";import"./KeyboardArrowRight-CqgdedSO.js";import"./Autocomplete-Dbpmp649.js";import"./usePreviousProps-Bb46F9DU.js";import"./use-deep-compare-effect.esm-_-MPhq0U.js";import"./TextWidget-hwiz_B1K.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
