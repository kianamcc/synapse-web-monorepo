import{jG as p}from"./iframe-DPeQX9IY.js";import{S as a}from"./SchemaDrivenAnnotationEditor-I79OTSBA.js";import"./index-Chi_LkuB.js";import"./useEntity-BqStd5q_.js";import"./pickBy-Cul4FH5m.js";import"./isString-eisIkryt.js";import"./_baseIteratee-CFQTp0Io.js";import"./useQueries-DguaIKVw.js";import"./useSuspenseQuery-CVo65e5I.js";import"./useInfiniteQuery-xxALfQ-J.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DJ1L7xQS.js";import"./useSchema-DCaDuMWS.js";import"./index-BdqAa_z5.js";import"./enums-BM4UcqWL.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CmWAzlou.js";import"./uniq-B4CZLMQR.js";import"./forEach-CWOCpBhE.js";import"./Add-DwK9_9Ke.js";import"./Grid-bJS6VZhs.js";import"./ListItem-_ZEsKrgA.js";import"./listItemButtonClasses-B8stH22h.js";import"./ListItemIcon-JU6b5P0n.js";import"./MenuItem-Bz0n2Htj.js";import"./ListItemText-CmeolSf_.js";import"./ArrowUpward-CwtDzyk0.js";import"./ContentCopy-DrBJO3gD.js";import"./FormControlLabel-BsfNF4hc.js";import"./Checkbox-Bep-teHK.js";import"./SwitchBase-BdJN6sqS.js";import"./FormGroup-B08wWBs7.js";import"./RadioGroup-g3t9JcOr.js";import"./Radio-CODELrSL.js";import"./Slider-D57-_d07.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CbSXaIL2.js";import"./DialogBase-5Fic6i17.js";import"./Close-DWJQu82H.js";import"./HelpPopover-Br--8Bfi.js";import"./MarkdownPopover-najxU_eq.js";import"./LightTooltip-Oi_KxvmH.js";import"./MarkdownSynapse-WzDgSYq4.js";import"./SkeletonButton-BCmBwLom.js";import"./SkeletonInlineBlock-CaY9GCqL.js";import"./SkeletonTable-BduDk56Z.js";import"./SkeletonParagraph-Qv67bFel.js";import"./JsonSchemaForm-CYq28nrV.js";import"./GridLegacy-BOWLnKX-.js";import"./HelpTwoTone-CRK-4UtF.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D0k_wmQ8.js";import"./_createAggregator-74EYR8BO.js";import"./_baseMap-B4TD45PJ.js";import"./DateTimePicker-Lf-q7UEk.js";import"./useMobilePicker-BC4VyAqm.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DUgOB3EZ.js";import"./index-BW92oQn_.js";import"./Chip-CLPwGdB7.js";import"./Tabs-CnxHyQPP.js";import"./KeyboardArrowRight-1NrbhFQY.js";import"./Autocomplete-Ctno4BK1.js";import"./usePreviousProps-C_Qzewu7.js";import"./use-deep-compare-effect.esm-BGGgLhTn.js";import"./TextWidget-CL-hbAFp.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const qr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,qr as __namedExportsOrder,Er as default};
