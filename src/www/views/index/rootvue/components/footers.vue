<template>
	<div class="box">
    <Input  placeholder="Enter something..." clearable style="width: 200px" />
    <Select  style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <Button type="primary">Search</Button>
    <Button type="info" @click="modal7 = true">Add</Button>
       <Modal
        title="对话框标题"
        v-model="modal7"
        :closable="false">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
</div>

</template>

<script type="text/javascript">
	export default {
		name:'footers',
		data(){
			return {
				modal7: false,
				 cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ]
			}
		}
	}
</script>
<style scoped>
	.box{
		margin: 20px;
		text-align: center;
	}
</style>