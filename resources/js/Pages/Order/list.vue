<template>
    <Layout :user="user">
        <!-- Content wrapper -->
        <div class="container-xxl flex-grow-1 container-p-y">

            <!-- Order List Widget -->

            <div class="card mb-6">
              <div class="card-widget-separator-wrapper">
                <div class="card-body card-widget-separator">
                  <div class="row gy-4 gy-sm-1">
                    <div class="col-sm-6 col-lg-3">
                      <div class="d-flex justify-content-between align-items-start card-widget-1 border-end pb-4 pb-sm-0">
                        <div>
                          <h4 class="mb-0">56</h4>
                          <p class="mb-0">Pending Payment</p>
                        </div>
                        <span class="avatar w-px-40 h-px-40 me-sm-6">
                          <span class="avatar-initial bg-label-secondary rounded">
                            <i class="icon-base bx bx-calendar icon-lg text-heading"></i>
                          </span>
                        </span>
                      </div>
                      <hr class="d-none d-sm-block d-lg-none me-6">
                    </div>
                    <div class="col-sm-6 col-lg-3">
                      <div class="d-flex justify-content-between align-items-start card-widget-2 border-end pb-4 pb-sm-0">
                        <div>
                          <h4 class="mb-0">12,689</h4>
                          <p class="mb-0">Completed</p>
                        </div>
                        <span class="avatar w-px-40 h-px-40 p-2 me-lg-6">
                          <span class="avatar-initial bg-label-secondary rounded">
                            <i class="icon-base bx bx-check-double icon-lg text-heading"></i>
                          </span>
                        </span>
                      </div>
                      <hr class="d-none d-sm-block d-lg-none">
                    </div>
                    <div class="col-sm-6 col-lg-3">
                      <div class="d-flex justify-content-between align-items-start border-end pb-4 pb-sm-0 card-widget-3">
                        <div>
                          <h4 class="mb-0">124</h4>
                          <p class="mb-0">Refunded</p>
                        </div>
                        <span class="avatar w-px-40 h-px-40 p-2 me-sm-6">
                          <span class="avatar-initial bg-label-secondary rounded">
                            <i class="icon-base bx bx-wallet icon-lg text-heading"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                      <div class="d-flex justify-content-between align-items-start">
                        <div>
                          <h4 class="mb-0">32</h4>
                          <p class="mb-0">Failed</p>
                        </div>
                        <span class="avatar w-px-40 h-px-40 p-2">
                          <span class="avatar-initial bg-label-secondary rounded">
                            <i class="icon-base bx bx-error-alt icon-lg text-heading"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Order List Table -->
            <div class="card">
              <div class="card-datatable table-responsive">
                <div id="DataTables_Table_0_wrapper" class="dt-container dt-bootstrap5 dt-empty-footer"><div class="row ms-3 my-0 justify-content-between"><div class="d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto px-3 mt-0"><div class="dt-search"><input type="search" class="form-control ms-0" id="dt-search-0" placeholder="Search Order" aria-controls="DataTables_Table_0"><label for="dt-search-0"></label></div></div><div class="d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto px-3 mt-0"><div class="dt-length mt-md-6 mt-0"><select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-select" id="dt-length-0"><option value="7">7</option><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select><label for="dt-length-0"></label></div><div class="dt-buttons btn-group flex-wrap gap-2 px-3 mt-0 mb-md-0 mb-6"><div class="btn-group mx-auto"><button class="btn buttons-collection btn-label-primary dropdown-toggle btn-label-secondary" tabindex="0" aria-controls="DataTables_Table_0" type="button" aria-haspopup="dialog" aria-expanded="false"><span><span class="d-flex align-items-center gap-2"><i class="icon-base bx bx-export icon-sm"></i> <span class="d-none d-sm-inline-block">Export</span></span></span></button></div> </div></div></div><div class="justify-content-between dt-layout-table"><div class="d-md-flex justify-content-between align-items-center dt-layout-full table-responsive"><table class="datatables-order table border-top dataTable dtr-column collapsed" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" style="width: 100%;"><colgroup><col data-dt-column="0" style="width: 48px;"><col data-dt-column="1" style="width: 58px;"><col data-dt-column="2" style="width: 95.6562px;"><col data-dt-column="3" style="width: 169.672px;"><col data-dt-column="4" style="width: 289.766px;"><col data-dt-column="5" style="width: 140px;"><col data-dt-column="6" style="width: 152.203px;"></colgroup>
                  <thead>
                    <tr><th data-dt-column="0" class="control dt-orderable-none" rowspan="1" colspan="1" aria-label=""><span class="dt-column-title"></span><span class="dt-column-order"></span></th><th data-dt-column="1" rowspan="1" colspan="1" class="dt-select dt-orderable-none" aria-label=""><span class="dt-column-title"></span><span class="dt-column-order"></span><input class="form-check-input" type="checkbox" aria-label="Select all rows"></th><th data-dt-column="2" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc" aria-label="order: Activate to sort" tabindex="0"><span class="dt-column-title" role="button">order</span><span class="dt-column-order"></span></th><th data-dt-column="3" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc dt-ordering-asc" aria-sort="ascending" aria-label="date: Activate to invert sorting" tabindex="0"><span class="dt-column-title" role="button">date</span><span class="dt-column-order"></span></th><th data-dt-column="4" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc" aria-label="customers: Activate to sort" tabindex="0"><span class="dt-column-title" role="button">customers</span><span class="dt-column-order"></span></th><th data-dt-column="5" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc" aria-label="payment: Activate to sort" tabindex="0"><span class="dt-column-title" role="button">payment</span><span class="dt-column-order"></span></th><th data-dt-column="6" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc" aria-label="status: Activate to sort" tabindex="0"><span class="dt-column-title" role="button">status</span><span class="dt-column-order"></span></th><th data-dt-column="7" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc dtr-hidden" aria-label="method: Activate to sort" tabindex="0" style="display: none;"><span class="dt-column-title" role="button">method</span><span class="dt-column-order"></span></th><th data-dt-column="8" rowspan="1" colspan="1" class="dt-orderable-none dtr-hidden" aria-label="Actions" style="display: none;"><span class="dt-column-title">Actions</span><span class="dt-column-order"></span></th></tr>
                  </thead><tbody><tr><td class="control" tabindex="0"></td><td class="dt-select"><input aria-label="Select row" class="form-check-input" type="checkbox"></td><td><a href="app-ecommerce-order-details.html"><span>#6979</span></a></td><td class="sorting_1"><span class="text-nowrap">Apr 15, 2023, 10:21</span></td><td>
                        <div class="d-flex justify-content-start align-items-center order-name text-nowrap">
                          <div class="avatar-wrapper">
                            <div class="avatar avatar-sm me-3">
                              <!-- <img src="../../assets/img/avatars/3.png" alt="Avatar" class="rounded-circle"> -->
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <h6 class="m-0"><a href="pages-profile-user.html" class="text-heading">Cristine Easom</a></h6>
                            <small>ceasomw@theguardian.com</small>
                          </div>
                        </div></td><td>
                          <h6 class="mb-0 align-items-center d-flex w-px-100 text-warning">
                            <i class="icon-base bx bxs-circle icon-8px me-1"></i>Pending
                          </h6></td><td>
                          <span class="badge px-2 bg-label-success text-capitalized">
                            Delivered
                          </span></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex align-items-center text-nowrap">
                          <!-- <img src="../../assets/img/icons/payments/mastercard-cc.png" alt="mastercard-cc" width="29"> -->
                          <span><i class="icon-base bx bx-dots-horizontal-rounded mt-1"></i>2356</span>
                        </div></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex justify-content-sm-start align-items-sm-center">
                          <button class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end m-0">
                            <a href="app-ecommerce-order-details.html" class="dropdown-item">View</a>
                            <a href="javascript:void(0);" class="dropdown-item delete-record">Delete</a>
                          </div>
                        </div></td></tr><tr><td class="control" tabindex="0"></td><td class="dt-select"><input aria-label="Select row" class="form-check-input" type="checkbox"></td><td><a href="app-ecommerce-order-details.html"><span>#6624</span></a></td><td class="sorting_1"><span class="text-nowrap">Apr 17, 2023, 6:43 </span></td><td>
                        <div class="d-flex justify-content-start align-items-center order-name text-nowrap">
                          <div class="avatar-wrapper">
                            <div class="avatar avatar-sm me-3">
                              <span class="avatar-initial rounded-circle bg-label-success">FS</span>
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <h6 class="m-0"><a href="pages-profile-user.html" class="text-heading">Fayre Screech</a></h6>
                            <small>fscreechs@army.mil</small>
                          </div>
                        </div></td><td>
                          <h6 class="mb-0 align-items-center d-flex w-px-100 text-danger">
                            <i class="icon-base bx bxs-circle icon-8px me-1"></i>Failed
                          </h6></td><td>
                          <span class="badge px-2 bg-label-success text-capitalized">
                            Delivered
                          </span></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex align-items-center text-nowrap">
                          <!-- <img src="../../assets/img/icons/payments/mastercard-cc.png" alt="mastercard-cc" width="29"> -->
                          <span><i class="icon-base bx bx-dots-horizontal-rounded mt-1"></i>2077</span>
                        </div></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex justify-content-sm-start align-items-sm-center">
                          <button class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end m-0">
                            <a href="app-ecommerce-order-details.html" class="dropdown-item">View</a>
                            <a href="javascript:void(0);" class="dropdown-item delete-record">Delete</a>
                          </div>
                        </div></td></tr><tr><td class="control" tabindex="0"></td><td class="dt-select"><input aria-label="Select row" class="form-check-input" type="checkbox"></td><td><a href="app-ecommerce-order-details.html"><span>#9305</span></a></td><td class="sorting_1"><span class="text-nowrap">Apr 17, 2023, 8:05 </span></td><td>
                        <div class="d-flex justify-content-start align-items-center order-name text-nowrap">
                          <div class="avatar-wrapper">
                            <div class="avatar avatar-sm me-3">
                              <span class="avatar-initial rounded-circle bg-label-danger">PP</span>
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <h6 class="m-0"><a href="pages-profile-user.html" class="text-heading">Pauline Pfaffe</a></h6>
                            <small>ppfaffe1i@wikia.com</small>
                          </div>
                        </div></td><td>
                          <h6 class="mb-0 align-items-center d-flex w-px-100 text-secondary">
                            <i class="icon-base bx bxs-circle icon-8px me-1"></i>Cancelled
                          </h6></td><td>
                          <span class="badge px-2 bg-label-primary text-capitalized">
                            Out for Delivery
                          </span></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex align-items-center text-nowrap">
                          <!-- <img src="../../assets/img/icons/payments/paypal.png" alt="paypal" width="29"> -->
                          <span><i class="icon-base bx bx-dots-horizontal-rounded mt-1"></i>@gmail.com</span>
                        </div></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex justify-content-sm-start align-items-sm-center">
                          <button class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end m-0">
                            <a href="app-ecommerce-order-details.html" class="dropdown-item">View</a>
                            <a href="javascript:void(0);" class="dropdown-item delete-record">Delete</a>
                          </div>
                        </div></td></tr><tr><td class="control" tabindex="0"></td><td class="dt-select"><input aria-label="Select row" class="form-check-input" type="checkbox"></td><td><a href="app-ecommerce-order-details.html"><span>#8005</span></a></td><td class="sorting_1"><span class="text-nowrap">Apr 22, 2023, 3:01 </span></td><td>
                        <div class="d-flex justify-content-start align-items-center order-name text-nowrap">
                          <div class="avatar-wrapper">
                            <div class="avatar avatar-sm me-3">
                              <!-- <img src="../../assets/img/avatars/1.png" alt="Avatar" class="rounded-circle"> -->
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <h6 class="m-0"><a href="pages-profile-user.html" class="text-heading">Maurits Nealey</a></h6>
                            <small>mnealeyf@japanpost.jp</small>
                          </div>
                        </div></td><td>
                          <h6 class="mb-0 align-items-center d-flex w-px-100 text-success">
                            <i class="icon-base bx bxs-circle icon-8px me-1"></i>Paid
                          </h6></td><td>
                          <span class="badge px-2 bg-label-warning text-capitalized">
                            Dispatched
                          </span></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex align-items-center text-nowrap">
                          <!-- <img src="../../assets/img/icons/payments/mastercard-cc.png" alt="mastercard-cc" width="29"> -->
                          <span><i class="icon-base bx bx-dots-horizontal-rounded mt-1"></i>1555</span>
                        </div></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex justify-content-sm-start align-items-sm-center">
                          <button class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end m-0">
                            <a href="app-ecommerce-order-details.html" class="dropdown-item">View</a>
                            <a href="javascript:void(0);" class="dropdown-item delete-record">Delete</a>
                          </div>
                        </div></td></tr><tr><td class="control" tabindex="0"></td><td class="dt-select"><input aria-label="Select row" class="form-check-input" type="checkbox"></td><td><a href="app-ecommerce-order-details.html"><span>#5859</span></a></td><td class="sorting_1"><span class="text-nowrap">Apr 29, 2023, 9:52 </span></td><td>
                        <div class="d-flex justify-content-start align-items-center order-name text-nowrap">
                          <div class="avatar-wrapper">
                            <div class="avatar avatar-sm me-3">
                              <span class="avatar-initial rounded-circle bg-label-warning">EV</span>
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <h6 class="m-0"><a href="pages-profile-user.html" class="text-heading">Eydie Vogelein</a></h6>
                            <small>evogelein2g@forbes.com</small>
                          </div>
                        </div></td><td>
                          <h6 class="mb-0 align-items-center d-flex w-px-100 text-secondary">
                            <i class="icon-base bx bxs-circle icon-8px me-1"></i>Cancelled
                          </h6></td><td>
                          <span class="badge px-2 bg-label-primary text-capitalized">
                            Out for Delivery
                          </span></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex align-items-center text-nowrap">
                          <!-- <img src="../../assets/img/icons/payments/paypal.png" alt="paypal" width="29"> -->
                          <span><i class="icon-base bx bx-dots-horizontal-rounded mt-1"></i>@gmail.com</span>
                        </div></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex justify-content-sm-start align-items-sm-center">
                          <button class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end m-0">
                            <a href="app-ecommerce-order-details.html" class="dropdown-item">View</a>
                            <a href="javascript:void(0);" class="dropdown-item delete-record">Delete</a>
                          </div>
                        </div></td></tr><tr><td class="control" tabindex="0"></td><td class="dt-select"><input aria-label="Select row" class="form-check-input" type="checkbox"></td><td><a href="app-ecommerce-order-details.html"><span>#8114</span></a></td><td class="sorting_1"><span class="text-nowrap">Apr 8, 2023, 3:39 </span></td><td>
                        <div class="d-flex justify-content-start align-items-center order-name text-nowrap">
                          <div class="avatar-wrapper">
                            <div class="avatar avatar-sm me-3">
                              <!-- <img src="../../assets/img/avatars/4.png" alt="Avatar" class="rounded-circle"> -->
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <h6 class="m-0"><a href="pages-profile-user.html" class="text-heading">Ulysses Goodlife</a></h6>
                            <small>ugoodlife2p@blogger.com</small>
                          </div>
                        </div></td><td>
                          <h6 class="mb-0 align-items-center d-flex w-px-100 text-danger">
                            <i class="icon-base bx bxs-circle icon-8px me-1"></i>Failed
                          </h6></td><td>
                          <span class="badge px-2 bg-label-primary text-capitalized">
                            Out for Delivery
                          </span></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex align-items-center text-nowrap">
                          <!-- <img src="../../assets/img/icons/payments/mastercard-cc.png" alt="mastercard-cc" width="29"> -->
                          <span><i class="icon-base bx bx-dots-horizontal-rounded mt-1"></i>4509</span>
                        </div></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex justify-content-sm-start align-items-sm-center">
                          <button class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end m-0">
                            <a href="app-ecommerce-order-details.html" class="dropdown-item">View</a>
                            <a href="javascript:void(0);" class="dropdown-item delete-record">Delete</a>
                          </div>
                        </div></td></tr><tr><td class="control" tabindex="0"></td><td class="dt-select"><input aria-label="Select row" class="form-check-input" type="checkbox"></td><td><a href="app-ecommerce-order-details.html"><span>#6890</span></a></td><td class="sorting_1"><span class="text-nowrap">Aug 1, 2022, 7:24 </span></td><td>
                        <div class="d-flex justify-content-start align-items-center order-name text-nowrap">
                          <div class="avatar-wrapper">
                            <div class="avatar avatar-sm me-3">
                              <!-- <img src="../../assets/img/avatars/9.png" alt="Avatar" class="rounded-circle"> -->
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <h6 class="m-0"><a href="pages-profile-user.html" class="text-heading">Etienne Duke</a></h6>
                            <small>eduke1z@dell.com</small>
                          </div>
                        </div></td><td>
                          <h6 class="mb-0 align-items-center d-flex w-px-100 text-secondary">
                            <i class="icon-base bx bxs-circle icon-8px me-1"></i>Cancelled
                          </h6></td><td>
                          <span class="badge px-2 bg-label-info text-capitalized">
                            Ready to Pickup
                          </span></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex align-items-center text-nowrap">
                          <!-- <img src="../../assets/img/icons/payments/mastercard-cc.png" alt="mastercard-cc" width="29"> -->
                          <span><i class="icon-base bx bx-dots-horizontal-rounded mt-1"></i>3507</span>
                        </div></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex justify-content-sm-start align-items-sm-center">
                          <button class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end m-0">
                            <a href="app-ecommerce-order-details.html" class="dropdown-item">View</a>
                            <a href="javascript:void(0);" class="dropdown-item delete-record">Delete</a>
                          </div>
                        </div></td></tr><tr><td class="control" tabindex="0"></td><td class="dt-select"><input aria-label="Select row" class="form-check-input" type="checkbox"></td><td><a href="app-ecommerce-order-details.html"><span>#5911</span></a></td><td class="sorting_1"><span class="text-nowrap">Aug 14, 2022, 3:26 </span></td><td>
                        <div class="d-flex justify-content-start align-items-center order-name text-nowrap">
                          <div class="avatar-wrapper">
                            <div class="avatar avatar-sm me-3">
                              <span class="avatar-initial rounded-circle bg-label-primary">HM</span>
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <h6 class="m-0"><a href="pages-profile-user.html" class="text-heading">Hilliard Merck</a></h6>
                            <small>hmerck2n@printfriendly.com</small>
                          </div>
                        </div></td><td>
                          <h6 class="mb-0 align-items-center d-flex w-px-100 text-secondary">
                            <i class="icon-base bx bxs-circle icon-8px me-1"></i>Cancelled
                          </h6></td><td>
                          <span class="badge px-2 bg-label-success text-capitalized">
                            Delivered
                          </span></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex align-items-center text-nowrap">
                          <!-- <img src="../../assets/img/icons/payments/paypal.png" alt="paypal" width="29"> -->
                          <span><i class="icon-base bx bx-dots-horizontal-rounded mt-1"></i>@gmail.com</span>
                        </div></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex justify-content-sm-start align-items-sm-center">
                          <button class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end m-0">
                            <a href="app-ecommerce-order-details.html" class="dropdown-item">View</a>
                            <a href="javascript:void(0);" class="dropdown-item delete-record">Delete</a>
                          </div>
                        </div></td></tr><tr><td class="control" tabindex="0"></td><td class="dt-select"><input aria-label="Select row" class="form-check-input" type="checkbox"></td><td><a href="app-ecommerce-order-details.html"><span>#5531</span></a></td><td class="sorting_1"><span class="text-nowrap">Aug 20, 2022, 3:21 </span></td><td>
                        <div class="d-flex justify-content-start align-items-center order-name text-nowrap">
                          <div class="avatar-wrapper">
                            <div class="avatar avatar-sm me-3">
                              <!-- <img src="../../assets/img/avatars/3.png" alt="Avatar" class="rounded-circle"> -->
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <h6 class="m-0"><a href="pages-profile-user.html" class="text-heading">Cletus Arias</a></h6>
                            <small>carias21@rambler.ru</small>
                          </div>
                        </div></td><td>
                          <h6 class="mb-0 align-items-center d-flex w-px-100 text-danger">
                            <i class="icon-base bx bxs-circle icon-8px me-1"></i>Failed
                          </h6></td><td>
                          <span class="badge px-2 bg-label-warning text-capitalized">
                            Dispatched
                          </span></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex align-items-center text-nowrap">
                          <!-- <img src="../../assets/img/icons/payments/mastercard-cc.png" alt="mastercard-cc" width="29"> -->
                          <span><i class="icon-base bx bx-dots-horizontal-rounded mt-1"></i>5851</span>
                        </div></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex justify-content-sm-start align-items-sm-center">
                          <button class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end m-0">
                            <a href="app-ecommerce-order-details.html" class="dropdown-item">View</a>
                            <a href="javascript:void(0);" class="dropdown-item delete-record">Delete</a>
                          </div>
                        </div></td></tr><tr><td class="control" tabindex="0"></td><td class="dt-select"><input aria-label="Select row" class="form-check-input" type="checkbox"></td><td><a href="app-ecommerce-order-details.html"><span>#8044</span></a></td><td class="sorting_1"><span class="text-nowrap">Aug 22, 2022, 6:36 </span></td><td>
                        <div class="d-flex justify-content-start align-items-center order-name text-nowrap">
                          <div class="avatar-wrapper">
                            <div class="avatar avatar-sm me-3">
                              <!-- <img src="../../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle"> -->
                            </div>
                          </div>
                          <div class="d-flex flex-column">
                            <h6 class="m-0"><a href="pages-profile-user.html" class="text-heading">Nowell Cornford</a></h6>
                            <small>ncornfordn@sogou.com</small>
                          </div>
                        </div></td><td>
                          <h6 class="mb-0 align-items-center d-flex w-px-100 text-secondary">
                            <i class="icon-base bx bxs-circle icon-8px me-1"></i>Cancelled
                          </h6></td><td>
                          <span class="badge px-2 bg-label-primary text-capitalized">
                            Out for Delivery
                          </span></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex align-items-center text-nowrap">
                          <!-- <img src="../../assets/img/icons/payments/paypal.png" alt="paypal" width="29"> -->
                          <span><i class="icon-base bx bx-dots-horizontal-rounded mt-1"></i>@gmail.com</span>
                        </div></td><td class="dtr-hidden" style="display: none;">
                        <div class="d-flex justify-content-sm-start align-items-sm-center">
                          <button class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i class="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end m-0">
                            <a href="app-ecommerce-order-details.html" class="dropdown-item">View</a>
                            <a href="javascript:void(0);" class="dropdown-item delete-record">Delete</a>
                          </div>
                        </div></td></tr></tbody>
                <tfoot></tfoot></table></div></div><div class="row mx-3 justify-content-between"><div class="d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto px-3 mt-0"><div class="dt-info" aria-live="polite" id="DataTables_Table_0_info" role="status">Showing 1 to 10 of 100 entries</div></div><div class="d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto px-3 mt-0"><div class="dt-paging"><nav aria-label="pagination"><ul class="pagination"><li class="dt-paging-button page-item disabled"><button class="page-link previous" role="link" type="button" aria-controls="DataTables_Table_0" aria-disabled="true" aria-label="Previous" data-dt-idx="previous" tabindex="-1"><i class="icon-base bx bx-chevron-left scaleX-n1-rtl icon-18px"></i></button></li><li class="dt-paging-button page-item active"><button class="page-link" role="link" type="button" aria-controls="DataTables_Table_0" aria-current="page" data-dt-idx="0">1</button></li><li class="dt-paging-button page-item"><button class="page-link" role="link" type="button" aria-controls="DataTables_Table_0" data-dt-idx="1">2</button></li><li class="dt-paging-button page-item"><button class="page-link" role="link" type="button" aria-controls="DataTables_Table_0" data-dt-idx="2">3</button></li><li class="dt-paging-button page-item"><button class="page-link" role="link" type="button" aria-controls="DataTables_Table_0" data-dt-idx="3">4</button></li><li class="dt-paging-button page-item"><button class="page-link" role="link" type="button" aria-controls="DataTables_Table_0" data-dt-idx="4">5</button></li><li class="dt-paging-button page-item disabled"><button class="page-link ellipsis" role="link" type="button" aria-controls="DataTables_Table_0" aria-disabled="true" data-dt-idx="ellipsis" tabindex="-1">…</button></li><li class="dt-paging-button page-item"><button class="page-link" role="link" type="button" aria-controls="DataTables_Table_0" data-dt-idx="9">10</button></li><li class="dt-paging-button page-item"><button class="page-link next" role="link" type="button" aria-controls="DataTables_Table_0" aria-label="Next" data-dt-idx="next"><i class="icon-base bx bx-chevron-right scaleX-n1-rtl icon-18px"></i></button></li></ul></nav></div></div></div></div>
              </div>
            </div>

                  </div>
        <!-- Content wrapper -->
    </Layout>
</template>

<script>
import Layout from "../../Components/Layout/Layout.vue";

export default {
    components: {
        Layout,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
};
</script>
