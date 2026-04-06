import{jw as p}from"./iframe-BO8yZwbi.js";import{S as a}from"./SchemaDrivenAnnotationEditor-VRNxAywd.js";import"./index-Chi_LkuB.js";import"./useEntity-B-68v_vW.js";import"./pickBy-B7UvI2sA.js";import"./isString-D9adbQ1Y.js";import"./_baseIteratee-CTX8Podl.js";import"./useInfiniteQuery-CLrbgs3-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-OxJ9im1Q.js";import"./useSchema-D1eprLqm.js";import"./index-B8Dgaztr.js";import"./enums-FlC8cLVC.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-0z5hbuaq.js";import"./uniq-jPjNCWnz.js";import"./forEach-UWyboym_.js";import"./Add-D2APtCj7.js";import"./Grid-CNkvGOgJ.js";import"./ListItem-B6JBwi8h.js";import"./listItemButtonClasses-DolHrTL5.js";import"./ListItemIcon-A7aTWdRc.js";import"./MenuItem-CbpqHvkr.js";import"./ListItemText-BKIyiJyn.js";import"./ArrowUpward-BgbV68Fz.js";import"./ContentCopy-DjnbWWnP.js";import"./FormControlLabel-DYL89ugT.js";import"./Checkbox-Du_6kpR0.js";import"./SwitchBase-Cx_CtAYe.js";import"./FormGroup-CENXVxde.js";import"./RadioGroup-DcIN2zkX.js";import"./Radio-gjuqJjNg.js";import"./Slider-DNgg7M0l.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BhoxDMnX.js";import"./DialogBase-C85pq0MZ.js";import"./Close-BzejB7Wi.js";import"./HelpPopover-fFTFNAOq.js";import"./MarkdownPopover-Dp1_UHGA.js";import"./LightTooltip-NUD2olvk.js";import"./MarkdownSynapse-BvDWhdGZ.js";import"./SkeletonButton-BjMHDMih.js";import"./SkeletonInlineBlock-DsdOdTux.js";import"./SkeletonTable-pZFOgUxM.js";import"./SkeletonParagraph-B75rYAhF.js";import"./JsonSchemaForm-CWLam6Np.js";import"./GridLegacy-w9Vmv43v.js";import"./HelpTwoTone-BdUH8ki5.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CAxq6XZ6.js";import"./_createAggregator-Du-c97WT.js";import"./_baseMap-2iTgJGE8.js";import"./DateTimePicker-BNNvhak9.js";import"./useMobilePicker-_Vq4JuFj.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BQH2H1uy.js";import"./index-DR8sCWIq.js";import"./Chip-CHXpsjrm.js";import"./Tabs-C1ML8bUs.js";import"./KeyboardArrowRight-B9UuuZQO.js";import"./Autocomplete-DA2l69mt.js";import"./usePreviousProps-D3abc4KG.js";import"./use-deep-compare-effect.esm-BVUvYpse.js";import"./TextWidget-yXGUAl3n.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
