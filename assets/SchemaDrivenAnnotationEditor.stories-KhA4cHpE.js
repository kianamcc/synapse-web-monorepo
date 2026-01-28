import{jH as p}from"./iframe-DmIbR_r6.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BNS0o0_-.js";import"./index-Chi_LkuB.js";import"./useEntity-Bppk7qsE.js";import"./pickBy-DGqmeqZf.js";import"./isString-krVYXN8Q.js";import"./_baseIteratee-DGiWPmRT.js";import"./useQueries-LRi5eBel.js";import"./useSuspenseQuery-Bb68RTLn.js";import"./useInfiniteQuery-CI1b4wGw.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BMJT5xvS.js";import"./useSchema-BTWRZ099.js";import"./index-sY2tLGS9.js";import"./enums-DcM6QjO0.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BQnbae_L.js";import"./uniq-DzOHloOS.js";import"./forEach-CWOCpBhE.js";import"./Add-JPY4mKOI.js";import"./Grid-DiIhkCNi.js";import"./ListItem-D--P9wx6.js";import"./listItemButtonClasses-DEqQDI3y.js";import"./ListItemIcon-7REVZypP.js";import"./MenuItem-BnZD-coi.js";import"./ListItemText-BTRSUVt1.js";import"./ArrowUpward-DHkMuXaG.js";import"./ContentCopy-BxQvER7l.js";import"./FormControlLabel-F84xQZnV.js";import"./Checkbox-BkqDpdYQ.js";import"./SwitchBase-CUTqoSBF.js";import"./FormGroup-D08ji2xj.js";import"./RadioGroup-D3RfrHWB.js";import"./Radio-CBdJfNMf.js";import"./Slider-B3Wk5HyE.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Di6NNHa2.js";import"./DialogBase-ChzVu5cL.js";import"./Close-Bq87bjEk.js";import"./HelpPopover-cKaKE6m4.js";import"./MarkdownPopover-CDin4ext.js";import"./LightTooltip-CYkDKzfj.js";import"./MarkdownSynapse-DuxA3dVB.js";import"./SkeletonButton-vlFvkNkv.js";import"./SkeletonInlineBlock-DFTJODNT.js";import"./SkeletonTable-Bj3J0JYP.js";import"./SkeletonParagraph-BUZlTYNH.js";import"./JsonSchemaForm-DQRFdFfR.js";import"./GridLegacy-7Rfi2gSQ.js";import"./HelpTwoTone-BFmDbE01.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-G5YUlqvZ.js";import"./_createAggregator-C4V07lTu.js";import"./_baseMap-CMpD4lY6.js";import"./DateTimePicker-DtfH21WI.js";import"./useMobilePicker-CeExYluk.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-mMmBzDbm.js";import"./index-Cbto9jav.js";import"./Chip-BRJez_-q.js";import"./Tabs-BzlT_JG_.js";import"./KeyboardArrowRight-Bt03slz8.js";import"./Autocomplete-ZcWmAmjn.js";import"./usePreviousProps-CIlFy7ce.js";import"./use-deep-compare-effect.esm-CJglqS1P.js";import"./TextWidget-BLsOUVsT.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
