import{jF as p}from"./iframe-Dmz0OYQW.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BlAHZEOp.js";import"./index-Chi_LkuB.js";import"./useEntity-DCJfD9JE.js";import"./pickBy-BCa-CFjS.js";import"./isString-CBMbF9Nh.js";import"./_baseIteratee-OyrRg5lQ.js";import"./useQueries-Gj-Mwc6j.js";import"./useSuspenseQuery-DBtfLQcz.js";import"./useInfiniteQuery-BvWsAshg.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-U54fuo6y.js";import"./useSchema-D4Tnd08_.js";import"./index-CESMR8qL.js";import"./enums-CD0cWFXz.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CX1KcIpU.js";import"./uniq-CrR8L-o2.js";import"./forEach-CWOCpBhE.js";import"./Add-CG4f_y22.js";import"./Grid-Du4p1N6T.js";import"./ListItem-BhWR9-KA.js";import"./listItemButtonClasses-BDHR41mL.js";import"./ListItemIcon-V2suGwJD.js";import"./MenuItem-CDWx0QZm.js";import"./ListItemText-DsCx8kUb.js";import"./ArrowUpward-CCG45SyN.js";import"./ContentCopy-DWasLGKR.js";import"./FormControlLabel-CyZL3MkF.js";import"./Checkbox-DYbJ9vmj.js";import"./SwitchBase-94QFIekX.js";import"./FormGroup-C5FAaMZP.js";import"./RadioGroup-BSw4YiXT.js";import"./Radio-NyT7JcsZ.js";import"./Slider-C6TDFPEO.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-91A2i7b8.js";import"./DialogBase-D4eQljKx.js";import"./Close-DJMVqFXZ.js";import"./HelpPopover-DDEeoZql.js";import"./MarkdownPopover-BJM8rGXo.js";import"./LightTooltip-B4ee2TOH.js";import"./MarkdownSynapse-BRO4x38K.js";import"./SkeletonButton--ocR4MjZ.js";import"./SkeletonInlineBlock-DMCr-ZDU.js";import"./SkeletonTable-DZOOfuw_.js";import"./SkeletonParagraph-BbQFsbPl.js";import"./JsonSchemaForm-B7DeiB72.js";import"./GridLegacy-COZZ2C8T.js";import"./HelpTwoTone-B01jSSTy.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BOpNDIGE.js";import"./_createAggregator-DI4Mk896.js";import"./_baseMap-BMU-1V4v.js";import"./DateTimePicker-D_JcR4Fr.js";import"./useMobilePicker-22K-9q2_.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DfV1miPS.js";import"./index-Bgq-5rD6.js";import"./Chip-CDOlQzO-.js";import"./Tabs-D03PZ5Q3.js";import"./KeyboardArrowRight-CyVZw2-K.js";import"./Autocomplete-8UIAmsQU.js";import"./usePreviousProps-C6N-Wksh.js";import"./use-deep-compare-effect.esm-B67s_ENK.js";import"./TextWidget-DHPN_Hvl.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
