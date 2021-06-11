from flask_restful import Api, Resource, reqparse
from models import Guest

class ControlApi(Resource):
	def get(self):
		basisData = Guest()
		return basisData.selectGuest()

	def post(self):
		print(self)
		parser = reqparser.RequestParser()
		parser.add_argument('type', type=str)
		parser.add_argument('message', type=str)

		args = parser.parse_args()
		print(args)

		request_json = args['message']
		request_type = args['type']

		ret_status = request_type
		ret_msg = request_json

		if ret_msg:
			message = 'kamu memiliki pesan {}'.format(ret_msg)
		else:
			message = 'tidak ada pesan'

		final_ret = {'status':'berhasil', 'message':message}
		return final_ret
