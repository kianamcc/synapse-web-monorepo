import{jy as p}from"./iframe-B232wCNe.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BRTS6tfo.js";import"./index-Chi_LkuB.js";import"./useEntity-C8RzoBC_.js";import"./pickBy-Cjq_BC74.js";import"./isString-BlP-ka-y.js";import"./_baseIteratee-DYtHAtdK.js";import"./useInfiniteQuery-DWrZvRU-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cwq6kYV5.js";import"./useSchema-Cl8hvIge.js";import"./index-Y1iR-5HL.js";import"./enums-C2yvHSEc.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BXg_PS_g.js";import"./uniq-DqbaCJ0V.js";import"./forEach-CWOCpBhE.js";import"./Add-C_fsTaV3.js";import"./Grid-Bt4fsCKY.js";import"./ListItem-Dyv9Cu1d.js";import"./listItemButtonClasses-AwHak7Ut.js";import"./ListItemIcon-DEl7qFDf.js";import"./MenuItem-G0IpQDVS.js";import"./ListItemText-CjZUm_wL.js";import"./ArrowUpward-D32myOSC.js";import"./ContentCopy-DshNcI2A.js";import"./FormControlLabel-9kWwTU5c.js";import"./Checkbox-BjOsasGy.js";import"./SwitchBase-DmbjsDrX.js";import"./FormGroup-uVltTTxV.js";import"./RadioGroup-BkXW_uD_.js";import"./Radio-CVXIYRhT.js";import"./Slider-BR08Gm2t.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BvIFxS0n.js";import"./DialogBase-CdGKFNop.js";import"./Close-B-DQ6RtW.js";import"./HelpPopover-0TadkfCC.js";import"./MarkdownPopover-DhG8HMhS.js";import"./LightTooltip-krKtsD_O.js";import"./MarkdownSynapse-C0MRPwg8.js";import"./SkeletonButton-BFqV1Bjq.js";import"./SkeletonInlineBlock-B1yQCAbt.js";import"./SkeletonTable-DsTP05oa.js";import"./SkeletonParagraph-D6S7cLaW.js";import"./JsonSchemaForm-B3FQ9zp5.js";import"./GridLegacy-DNb-3HYN.js";import"./HelpTwoTone-DpwZ5JVA.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-9_jLD9Jy.js";import"./_createAggregator-D53t2TpJ.js";import"./_baseMap-lOtKvTec.js";import"./DateTimePicker-CF5dsqSW.js";import"./useMobilePicker-DxwNbLuo.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DGKmgc-v.js";import"./index-B8EHcCSt.js";import"./Chip-C9IsdVPl.js";import"./Tabs-CoH0Gh0c.js";import"./KeyboardArrowRight-BPSa8AoJ.js";import"./Autocomplete-E2ZpIDdF.js";import"./usePreviousProps-DiGhB4t2.js";import"./use-deep-compare-effect.esm-Bo67Fp7r.js";import"./TextWidget-lyaXnaok.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
