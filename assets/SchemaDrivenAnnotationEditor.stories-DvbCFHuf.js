import{jw as p}from"./iframe--e7tPOH7.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CpjTdPm8.js";import"./index-Chi_LkuB.js";import"./useEntity-Co20u6Rb.js";import"./pickBy-CHuVCXcX.js";import"./isString-BV1H8WPp.js";import"./_baseIteratee-DiAJV_uA.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DhFcZOnt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CqwT8UJd.js";import"./useSchema-C6ZDqcje.js";import"./index-VrLhmw3E.js";import"./enums-lD8wATiC.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-g2_Zy4Dj.js";import"./uniq-YdFBlWk4.js";import"./forEach-UWyboym_.js";import"./Add-B2ewVvte.js";import"./Grid-D5P_9YO-.js";import"./ListItem-BSG_xHXL.js";import"./listItemButtonClasses-CUCHuFXh.js";import"./ListItemIcon-CZQwd6CJ.js";import"./MenuItem-ClPLR1c1.js";import"./ListItemText-CvkUSFZN.js";import"./ArrowUpward-CNe_p0d6.js";import"./ContentCopy-DxjKrwdP.js";import"./FormControlLabel-DIFOv5rN.js";import"./Checkbox-BZ_kVbRn.js";import"./SwitchBase-xd1f4aUc.js";import"./FormGroup-zkCCg-rJ.js";import"./RadioGroup-By2jeZJK.js";import"./Radio-B7xydFXE.js";import"./Slider-f9OfnCff.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DPfClze9.js";import"./DialogBase-DNF9auJc.js";import"./Close-B-eQ4kzT.js";import"./HelpPopover-D1896MTn.js";import"./MarkdownPopover-DgdSpLQA.js";import"./LightTooltip-CfxxK8Nb.js";import"./MarkdownSynapse-Bzo0baHo.js";import"./SkeletonButton-_aLRz4g8.js";import"./SkeletonInlineBlock-CYh7Z-UU.js";import"./SkeletonTable-CaoeDxPi.js";import"./SkeletonParagraph-DxfKrJwN.js";import"./JsonSchemaForm-Dl651CeM.js";import"./GridLegacy-D3hcr3BJ.js";import"./HelpTwoTone-CZ5Zd2kb.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CdPaSeI7.js";import"./_createAggregator-Dw032Fqr.js";import"./_baseMap-Dq1V0zb5.js";import"./DateTimePicker-GEdoUdIn.js";import"./useMobilePicker-DbmujqNQ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-C81UJFZy.js";import"./index-B0hb1_FS.js";import"./Chip-BjLa75DM.js";import"./Tabs-BdA9fxKE.js";import"./KeyboardArrowRight-BmEsMjev.js";import"./Autocomplete-CwBzqZJ8.js";import"./usePreviousProps-C2VjmU0C.js";import"./use-deep-compare-effect.esm-CngV8JcN.js";import"./TextWidget-CWv1reoH.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
