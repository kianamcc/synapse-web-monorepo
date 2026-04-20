import{jx as p}from"./iframe-Bs_Prdk_.js";import{S as a}from"./SchemaDrivenAnnotationEditor-C7PyiQXB.js";import"./index-Chi_LkuB.js";import"./useEntity-Bj3sdFpz.js";import"./pickBy-BnnItINO.js";import"./isString-CeR9rsaU.js";import"./_baseIteratee-BdtYTyfi.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BFUuL85S.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-rbEL0P-Z.js";import"./useSchema-BtJJ_0rN.js";import"./index-Bh1jrn3L.js";import"./enums-BcfJDIZV.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-zH0fr7Ws.js";import"./uniq-C6U58XJ2.js";import"./forEach-UWyboym_.js";import"./Add-ze5Ksyw_.js";import"./Grid-CR1iINHr.js";import"./ListItem-Mn3T96Ix.js";import"./listItemButtonClasses-BakoQbJF.js";import"./ListItemIcon-B0TRZ9ri.js";import"./MenuItem-DQ2i9Xmi.js";import"./ListItemText-U_GYswir.js";import"./ArrowUpward-R6HEnsVQ.js";import"./ContentCopy-CpCzVu7m.js";import"./FormControlLabel-D0PCi45L.js";import"./Checkbox-e_vFu3N4.js";import"./SwitchBase-CC1BS3iN.js";import"./FormGroup-D8Xw06dH.js";import"./RadioGroup-_hPcb7DO.js";import"./Radio-B_jSkH30.js";import"./Slider-CF1j-xaw.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-fiIuTmNs.js";import"./DialogBase-CNTtoPKS.js";import"./Close-Dhu31KS6.js";import"./HelpPopover-DsZu1FFV.js";import"./MarkdownPopover-CEEU5Nmq.js";import"./LightTooltip-COqi4IFI.js";import"./MarkdownSynapse-BoHcENa8.js";import"./SkeletonButton-B-1H7QMA.js";import"./SkeletonInlineBlock-Djc2NMos.js";import"./SkeletonTable-Q4aEQVXF.js";import"./SkeletonParagraph-NTXhe3CA.js";import"./JsonSchemaForm-NItOYP_6.js";import"./GridLegacy-AyYXb3DV.js";import"./HelpTwoTone-sF7p6KJC.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-ClsdLMNN.js";import"./_createAggregator-DZmYkOJU.js";import"./_baseMap-BYoRMOp3.js";import"./DateTimePicker-DPTMuDfz.js";import"./useMobilePicker-DzR46SVE.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DlZi7743.js";import"./index-CYslwlK8.js";import"./Chip-D6_WALXy.js";import"./Tabs-2ueSwJbK.js";import"./KeyboardArrowRight-CJDch5M_.js";import"./Autocomplete-DzYLqFiJ.js";import"./usePreviousProps-_O8gdq38.js";import"./use-deep-compare-effect.esm-DzPVF3zu.js";import"./TextWidget-C2UTvAjQ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
