import{jw as p}from"./iframe-CbwEnKrb.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BRzukHxl.js";import"./index-Chi_LkuB.js";import"./useEntity-CsseZqzH.js";import"./pickBy-BQnZNldP.js";import"./isString-D-KW-qVj.js";import"./_baseIteratee-D2fQYW4o.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-B3BSk6H4.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C2YCCRM-.js";import"./useSchema-DzBDejz3.js";import"./index-CD97yfsQ.js";import"./enums-jEmFAto-.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-YW957Zpj.js";import"./uniq-C_Ibp1PF.js";import"./forEach-UWyboym_.js";import"./Add-hIBK5_32.js";import"./Grid-Cbn80LTb.js";import"./ListItem-D7_yuWDI.js";import"./listItemButtonClasses-BVlmlIkb.js";import"./ListItemIcon-Dky46BWb.js";import"./MenuItem-D7q812IO.js";import"./ListItemText-BVHNk2uO.js";import"./ArrowUpward-BDhPaxRH.js";import"./ContentCopy-etbhQfSO.js";import"./FormControlLabel-BZevxPBM.js";import"./Checkbox-DZpQgbr_.js";import"./SwitchBase-2hzSnv65.js";import"./FormGroup-CXebt6Yq.js";import"./RadioGroup-CohB6BaC.js";import"./Radio-BpAGa3K-.js";import"./Slider-C55pNaTB.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-o72spyHe.js";import"./DialogBase-D6FQY60e.js";import"./Close-tQx-wqp_.js";import"./HelpPopover-Dtzy2cbb.js";import"./MarkdownPopover-BlyA42oU.js";import"./LightTooltip-CLO2ZiPK.js";import"./MarkdownSynapse-CV3-JJWu.js";import"./SkeletonButton-CVSY2DZ9.js";import"./SkeletonInlineBlock-CWmuPwAO.js";import"./SkeletonTable-BPQpmDB9.js";import"./SkeletonParagraph-DANy215S.js";import"./JsonSchemaForm-BMx7HzXJ.js";import"./GridLegacy-DXl5na4U.js";import"./HelpTwoTone-ClsJTnzE.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-0mvFrh-k.js";import"./_createAggregator-C4BFQ2BQ.js";import"./_baseMap-BHK-7f7f.js";import"./DateTimePicker-DU8wlpzo.js";import"./useMobilePicker-9ueuhIi6.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CBk7m-gl.js";import"./index-DKdIbvc8.js";import"./Chip-CmhjDClg.js";import"./Tabs-maIMEzNH.js";import"./KeyboardArrowRight-DFfuFEma.js";import"./Autocomplete-DaOKx0WE.js";import"./usePreviousProps-DEaKdrDo.js";import"./use-deep-compare-effect.esm-c2lwR3dz.js";import"./TextWidget-DXwXMG2v.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
