import{jw as p}from"./iframe-BbyAgVod.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CDF2hC1U.js";import"./index-Chi_LkuB.js";import"./useEntity-CndnI0qR.js";import"./pickBy-BNwAhD7t.js";import"./isString-CWXCs3Xh.js";import"./_baseIteratee-Dz5jfdCx.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Cis8MpVG.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-d61plDPs.js";import"./useSchema-6_JlSrNN.js";import"./index-lY5iFhw_.js";import"./enums-D1of3YaM.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CjlXDLG7.js";import"./uniq-DWabX3Wp.js";import"./forEach-UWyboym_.js";import"./Add-Bl10XVsT.js";import"./Grid-DUuNkSiV.js";import"./ListItem-aag4LC78.js";import"./listItemButtonClasses-IvvjZyTY.js";import"./ListItemIcon-yaKUPlqf.js";import"./MenuItem-BOC7yxlQ.js";import"./ListItemText-D6ZbV_Vr.js";import"./ArrowUpward-ChLH8RgL.js";import"./ContentCopy-CF3u7WmE.js";import"./FormControlLabel-DyfmsA3D.js";import"./Checkbox-CEuzbj9w.js";import"./SwitchBase-D4_ReTEb.js";import"./FormGroup-BVsHtdzv.js";import"./RadioGroup-CP4Pahtt.js";import"./Radio-BJbcqdQt.js";import"./Slider-DBgbaIkF.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D-tV9GIR.js";import"./DialogBase-nCS3ahcQ.js";import"./Close-BBCw0Jfc.js";import"./HelpPopover-BKQ_lBJ3.js";import"./MarkdownPopover-BUo7fnkz.js";import"./LightTooltip-CjTxmPMX.js";import"./MarkdownSynapse-7KNTNWWL.js";import"./SkeletonButton-CvgBxsOq.js";import"./SkeletonInlineBlock-CGRSHTJp.js";import"./SkeletonTable-8hMWU9b8.js";import"./SkeletonParagraph-TSyA2Bdi.js";import"./JsonSchemaForm-BsWSGxd_.js";import"./GridLegacy-D8HjBd6V.js";import"./HelpTwoTone-CQ66alMJ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Deyl2FcW.js";import"./_createAggregator-BaySRo8w.js";import"./_baseMap-DL1JQLUY.js";import"./DateTimePicker-CDzDh7sY.js";import"./useMobilePicker-CZbhmllx.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DTXjPlYE.js";import"./index-QgGURz5J.js";import"./Chip-DvcIhhPD.js";import"./Tabs-DNSBQAY0.js";import"./KeyboardArrowRight-DVmLDuBX.js";import"./Autocomplete-BU4fl7Bk.js";import"./usePreviousProps-Ho5tQjOf.js";import"./use-deep-compare-effect.esm-BpZ8yC2Q.js";import"./TextWidget-BFvkvL6p.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
