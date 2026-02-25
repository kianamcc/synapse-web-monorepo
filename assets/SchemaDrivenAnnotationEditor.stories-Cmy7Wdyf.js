import{jF as p}from"./iframe-HhNUql8D.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CfMAK7w-.js";import"./index-Chi_LkuB.js";import"./useEntity-DF-2AloP.js";import"./pickBy-CKjZAjje.js";import"./isString-D2bCjL-N.js";import"./_baseIteratee-DscUwa23.js";import"./useQueries-DJ5viPPl.js";import"./useSuspenseQuery-DB6yHRv0.js";import"./useInfiniteQuery-DE1A5qVC.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BRlKCRN9.js";import"./useSchema-nEs2iVqy.js";import"./index-BwVcaUGB.js";import"./enums-lngw8SOU.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Z8qGCdKi.js";import"./uniq-DmrgozJc.js";import"./forEach-CWOCpBhE.js";import"./Add-XMY3Vo5_.js";import"./Grid-DCuy2lUH.js";import"./ListItem-CR8dFfpl.js";import"./listItemButtonClasses-y8ASnlnG.js";import"./ListItemIcon-gjyTV9QB.js";import"./MenuItem-CNBBPtb0.js";import"./ListItemText-BLOEsJIx.js";import"./ArrowUpward-JtEWuePX.js";import"./ContentCopy-BF_M5IHx.js";import"./FormControlLabel-C-rWpYTl.js";import"./Checkbox-Ddqx6MYE.js";import"./SwitchBase-B990BXLh.js";import"./FormGroup-CBm5akN6.js";import"./RadioGroup-Bz_NLIR-.js";import"./Radio-CR9eq1i7.js";import"./Slider-BVgo-9nV.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-X-q5EAD5.js";import"./DialogBase-CixZag-K.js";import"./Close-DwkMpKYS.js";import"./HelpPopover-HYfG1omk.js";import"./MarkdownPopover-C0XojMIG.js";import"./LightTooltip-N2Yg4ppW.js";import"./MarkdownSynapse-Der_vikg.js";import"./SkeletonButton-CAAREen-.js";import"./SkeletonInlineBlock-Ckp06Ekm.js";import"./SkeletonTable-EUCE1WAM.js";import"./SkeletonParagraph-DMnpDLUG.js";import"./JsonSchemaForm-DWjxg_ka.js";import"./GridLegacy-vtq68X8r.js";import"./HelpTwoTone-C_RA5eoi.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BZqCtS5z.js";import"./_createAggregator-CIbVMDgU.js";import"./_baseMap-Bdekh0DQ.js";import"./DateTimePicker-C99uCXxY.js";import"./useMobilePicker-BxUtp3Gx.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-VrKMKYkV.js";import"./index-Dr8U68KC.js";import"./Chip-CfoXnBsJ.js";import"./Tabs-D-JX_Zxd.js";import"./KeyboardArrowRight-w3AJde8e.js";import"./Autocomplete-BxGKHLAX.js";import"./usePreviousProps-LikoPITP.js";import"./use-deep-compare-effect.esm-BKeKIqEJ.js";import"./TextWidget-9H4aR1kK.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
