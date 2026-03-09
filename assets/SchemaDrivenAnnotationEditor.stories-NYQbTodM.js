import{jy as p}from"./iframe-q5BnJc5S.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BdL7lHc_.js";import"./index-Chi_LkuB.js";import"./useEntity-DDE8woGx.js";import"./pickBy-PZ24Yg5E.js";import"./isString-B56E0Fkc.js";import"./_baseIteratee-Bf6jJ8a4.js";import"./useInfiniteQuery-D5XkbWpS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-9I7aU0W4.js";import"./useSchema-Byjuytdo.js";import"./index-Cw2HqwDl.js";import"./enums-Bqs_A5We.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C5BYqVlA.js";import"./uniq-CkK5D4gv.js";import"./forEach-CWOCpBhE.js";import"./Add-CxFrbRCB.js";import"./Grid-CqsvcyoA.js";import"./ListItem-BPjLVF9P.js";import"./listItemButtonClasses-BmpH4sBo.js";import"./ListItemIcon-BPKp47fY.js";import"./MenuItem-Dyp2z-uJ.js";import"./ListItemText-BsKzjvGh.js";import"./ArrowUpward-B-EU1vWx.js";import"./ContentCopy-P1luOTkN.js";import"./FormControlLabel-DANY_K9i.js";import"./Checkbox-IAG2j8Ku.js";import"./SwitchBase-BdkhONOe.js";import"./FormGroup-BAD4rn3w.js";import"./RadioGroup-Bp2vovg3.js";import"./Radio-xVFlZNT-.js";import"./Slider-Dy1PJ5Dq.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-cK5dtH2n.js";import"./DialogBase-TxfBJQdL.js";import"./Close-BFioOlv8.js";import"./HelpPopover-D18uwdic.js";import"./MarkdownPopover-Cs7UCNrh.js";import"./LightTooltip-Q1_0_6h6.js";import"./MarkdownSynapse-DexZcVsN.js";import"./SkeletonButton-CD8U5Nrp.js";import"./SkeletonInlineBlock-Ci-yqlbg.js";import"./SkeletonTable-BfI5L8UG.js";import"./SkeletonParagraph-CBm7mA9i.js";import"./JsonSchemaForm-CNEXRAr-.js";import"./GridLegacy-DgGODy3D.js";import"./HelpTwoTone-nx2LK0U3.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CECcnrh3.js";import"./_createAggregator-CGEbIm2H.js";import"./_baseMap-wSNPYFWY.js";import"./DateTimePicker--WM_t5q-.js";import"./useMobilePicker-Bq3-kV1u.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Day6LqyR.js";import"./index-CnWYiVZi.js";import"./Chip-DEZ4NRsM.js";import"./Tabs-BPjr_4av.js";import"./KeyboardArrowRight-ChiBeQGN.js";import"./Autocomplete-BZgtpnat.js";import"./usePreviousProps-Dp5E5Cow.js";import"./use-deep-compare-effect.esm-JmWNPEdm.js";import"./TextWidget-CkakoHqe.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
