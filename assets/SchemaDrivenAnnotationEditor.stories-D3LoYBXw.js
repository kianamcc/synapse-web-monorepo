import{jJ as p}from"./iframe-Cw2Vf6_R.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BcxAL1AX.js";import"./index-Chi_LkuB.js";import"./useEntity-XRITyOMs.js";import"./pickBy-Cx-5Hcth.js";import"./isString-C2OvOFAL.js";import"./_baseIteratee-HWCsHMt3.js";import"./useQueries-BVGbZrQM.js";import"./useSuspenseQuery-Cn71fWAt.js";import"./useInfiniteQuery-L_gif3jU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-z1EzzmPU.js";import"./useSchema-DCpuUwAh.js";import"./index-BhVlaGq3.js";import"./enums-Bq7eBZy8.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-90T_6CtV.js";import"./uniq-D3dQOcLt.js";import"./forEach-CWOCpBhE.js";import"./Add-C61eFNGi.js";import"./Grid-4IXIXWRo.js";import"./ListItem-D6MwjqT7.js";import"./listItemButtonClasses-CPW8A3WP.js";import"./ListItemIcon-chijzGOc.js";import"./MenuItem-y3yB9tRp.js";import"./ListItemText-DKudyAqs.js";import"./ArrowUpward-exj1eEXC.js";import"./ContentCopy-BOvJ4sDc.js";import"./FormControlLabel-Cit7svP9.js";import"./Checkbox-BEgs4XO-.js";import"./SwitchBase-Dwgs0une.js";import"./FormGroup-B3LBhXVs.js";import"./RadioGroup-C_AcLMm4.js";import"./Radio-D1-4FvGK.js";import"./Slider-Chiw5WlN.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CpDn5qEd.js";import"./DialogBase-Ch4N59fU.js";import"./Close-WUycMzMO.js";import"./HelpPopover-CVM1ST3g.js";import"./MarkdownPopover-ARMdgv36.js";import"./LightTooltip-CsZ7UZ4g.js";import"./MarkdownSynapse-Dz3rltmw.js";import"./SkeletonButton-CH7PSBg9.js";import"./SkeletonInlineBlock-BXybPdXq.js";import"./SkeletonTable-CFa2K4dK.js";import"./SkeletonParagraph-DgBCouD8.js";import"./JsonSchemaForm-By4g_g7H.js";import"./GridLegacy-CdTsjncP.js";import"./HelpTwoTone-Dc2ZPLEx.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-MB0xHOX7.js";import"./_createAggregator-BAiKTmgr.js";import"./_baseMap-CKoRPIBA.js";import"./DateTimePicker-dfjU_L4Z.js";import"./useMobilePicker-B-NO77ey.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BDmvth_f.js";import"./index-DoVT484J.js";import"./Chip-BqceZA6q.js";import"./Tabs-BQSOFpwz.js";import"./KeyboardArrowRight-CbVjpB2I.js";import"./Autocomplete-D8QAlkD2.js";import"./usePreviousProps-Cwx2pcl9.js";import"./use-deep-compare-effect.esm-CwINeFcQ.js";import"./TextWidget-DTiNp_it.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
